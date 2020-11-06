const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Description is required"],
    },
    score: {
      type: Number,
      get: (v) => Math.round(v),
      set: (v) => Math.round(v),
      required: [true, "Score is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    eventId: {
      type: String,
      //required: true
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, toReturn) => {
        toReturn.id = doc._id;
        delete toReturn.__v;
        delete toReturn._id;
        delete toReturn.createdAt;
        delete toReturn.updateAt;
        return toReturn;
      },
    },
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
