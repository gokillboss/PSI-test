const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attemptSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    quizId: { type: Schema.Types.ObjectId, ref: "Quiz", required: true },
    score: { type: Number, required: true },
    completedAt: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Attempt", attemptSchema);
