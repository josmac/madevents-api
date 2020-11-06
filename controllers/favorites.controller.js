const Favorites = require("../models/favorites.model");
const createError = require("http-errors");

module.exports.createFavorite = (req, res, next) => {
  const {
    eventId,
    eventCategory,
    eventImg,
    eventTitle,
    eventDates,
    eventPrices,
  } = req.body;
  const finder = { user: req.currentUser.id, eventId: eventId };
  const params = {
    user: req.currentUser.id,
    eventId: eventId,
    eventCategory: eventCategory,
    eventDates: eventDates,
    eventImg: eventImg,
    eventTitle: eventTitle,
    eventPrices: eventPrices,
  };

  Favorites.findOne(finder)
    .then((favorite) => {
      if (favorite) {
        Favorites.findByIdAndRemove(favorite._id)
          .then(() => {
            res.json({});
          })
          .catch(next);
      } else {
        const favorite = new Favorites(params);

        favorite
          .save()
          .then(() => {
            res.json({});
          })
          .catch(next);
      }
    })
    .catch(next);
};
