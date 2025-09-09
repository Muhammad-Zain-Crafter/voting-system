import mongoose, { Schema } from "mongoose";

const candidateSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    party: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    votes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        votedAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    voteCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export const Candidate = mongoose.model("Candidate", candidateSchema)