import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Candidate } from "../models/candidate.model.js";
import { isValidObjectId } from "mongoose";


const createCandidate = asyncHandler(async (req, res) => {
    const {name, party, age } = req.body
    if (!name) {
        throw new ApiError(400, "Candidate name is required")
    }
    if (!party) {
        throw new ApiError(400, "Candidate party is required")
    }
    if (!age) {
        throw new ApiError(400, "Candidate age is required")
    }

    const existedCandidate = await Candidate.findOne({
        $or: [
            {name},
            {party}
        ]
    })
    if (existedCandidate) {
        throw new ApiError(400, "Candidate with this name or party already exists")
    }

    const candidate = await Candidate.create({
        name,
        party,
        age,
        votes: [],
        votesCount: 0
    })
    return res
    .status(201)
    .json(
        new ApiResponse(
            201, candidate, "Candidate created successfully"
        )
    )
})

const updateCandidate = asyncHandler(async (req, res) => {
    const {candidateId} = req.params
    const {name, party, age } = req.body

    if (!isValidObjectId(candidateId)) {
        throw new ApiError()
    }
    if (!(name || party || age)) {
        throw new ApiError(400, "At least one field is required to update")
    }
   
})

export {
    createCandidate
}