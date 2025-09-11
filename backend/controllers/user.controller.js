import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateAccessRefreshToken = async (userId) => {
  try {   
    const user = await User.findById(userId)
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()
    // store refresh token in db:
    user.refreshToken = refreshToken
    await user.save({validateBeforeSave: false})
    return {accessToken, refreshToken}
  }
  catch(error) {
    throw new ApiError(500, "Token generation failed")
  }
}

const register = asyncHandler(async (req, res) => {
  const { username, email, fullName, password, cnicNumber, age, role } = req.body;

  if (!username) throw new ApiError(400, "Username is required");
  if (!email) throw new ApiError(400, "Email is required");
  if (!fullName) throw new ApiError(400, "Full name is required");
  if (!password) throw new ApiError(400, "Password is required");
  if (!cnicNumber) throw new ApiError(400, "CNIC is required");
  if (!age) throw new ApiError(400, "Age is required");

  const existedUser = await User.findOne({
    $or: [
        {username},
        {email}
    ]
  })
  if (existedUser) {
    throw new ApiError(400, "User with this username or email already exists")
  }

  const checkCNIC = await User.findOne({
    cnicNumber
  })
  if (checkCNIC) {
    throw new ApiError(400, "User with this CNIC already registered")
  }
  
  const user = await User.create({
    fullName,
    username: username.toLowerCase(),
    email,
    cnicNumber,
    age,
    password,
    role: role || "voter"
  })
  const createdUser = await User.findById(user._id).select(
    "-password"
  )

  if (!createdUser) {
    throw new ApiError(500, "User creation failed");
  }

  return res
  .status(201)
  .json(
    new ApiResponse(
        201, createdUser, "User created successfully"
    )
  )
});

const login = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body 
  if (!(username || email)) {
    throw new ApiError(400, "Username or email is required")
  }

  const user = await User.findOne({
    $or: [
      {username: username},
      {email: email}
    ]
  })
  if (!user) {
    throw new ApiError(404, "User not found")
  }
  
  const isPasswordValid = await user.isPasswordCorrect(password)
  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid password")
  }

  const {accessToken, refreshToken} = await generateAccessRefreshToken(user._id)
  const loggedinUser = await User.findById(user._id).select("-password -refreshToken")  

  const options = {
    httpOnly: true,
    secure: true
  }
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedinUser,
          accessToken,
          refreshToken
        },
        "user loggedin successfully"
      )
    );
})

const getProfile = asyncHandler(async (req, res) => {
  return res
  .status(200)
  .json(
    new ApiResponse( 200, req.user, "User profile fetched successfully")
  )
})

export {
    register,
    login,
    getProfile
}