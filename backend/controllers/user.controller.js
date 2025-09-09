import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const register = asyncHandler(async (req, res) => {
  const { username, email, fullName, password, cnicNumber, age, role } = req.body;

  if (!username) throw new apiError(400, "Username is required");
  if (!email) throw new apiError(400, "Email is required");
  if (!fullName) throw new apiError(400, "Full name is required");
  if (!password) throw new apiError(400, "Password is required");
  if (!cnicNumber) throw new apiError(400, "CNIC is required");
  if (!age) throw new apiError(400, "Age is required");

  const existedUser = await User.findOne({
    $or: [
        {username},
        {email}
    ]
  })
  if (existedUser) {
    throw new apiError(400, "User with this username or email already exists")
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
    throw new apiError(500, "User creation failed");
  }

  return res
  .status(200)
  .json(
    new ApiResponse(
        200, createdUser, "User created successfully"
    )
  )
});

export {
    register
}