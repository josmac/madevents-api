const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventId: {
      type: String,
      required: true,
    },
    eventCategory: {
      type: String,
      required: true,
    },
    eventImg: {
      type: String,
      required: true,
    },
    eventTitle: {
      type: String,
      required: true,
    },
    eventDates: {
      type: String,
      required: true,
    },
    eventPrices: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, toReturn) => {
        toReturn.id = doc._id;
        delete toReturn._id;
        delete toReturn.__v;
        return toReturn;
      },
    },
  }
);

const Favorites = mongoose.model("Favorites", favoritesSchema);

module.exports = Favorites;
