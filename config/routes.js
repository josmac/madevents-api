const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const baseController = require("../controllers/base.controller");
const userController = require("../controllers/user.controller");
const favoritesController = require("../controllers/favorites.controller");
const upload = require("./cloudinary.config");

module.exports = router;

router.get("/", authMiddleware.isNotAuthenticated, baseController.index);
router.post("/login", authMiddleware.isNotAuthenticated, userController.login);
router.post("/logout", authMiddleware.isAuthenticated, userController.logout);
router.post(
  "/users",
  authMiddleware.isNotAuthenticated,
  upload.single("avatar"),
  userController.create
);
router.post(
  "/favorites",
  authMiddleware.isAuthenticated,
  favoritesController.createFavorite
);
router.get(
  "/profile/:id",
  authMiddleware.isAuthenticated,
  userController.profile
);
