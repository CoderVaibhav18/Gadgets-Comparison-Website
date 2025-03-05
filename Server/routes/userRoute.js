const { Router } = require("express");
const { userSignup, userLogin, userProfie, userlogout } = require("../controllers/userController");
const { body } = require("express-validator");
const { authUser } = require("../middlewares/authUser");

const router = Router();

router.post(
  "/signup",
  body("name").isString().withMessage("Name must be string"),
  body("email").isEmail().withMessage("Email must be valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be 4 characters"),
  userSignup
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Email must be valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be 4 characters"),
  userLogin
);

router.get('/profile', authUser, userProfie)

router.get('/logout',authUser, userlogout)

module.exports = router;
