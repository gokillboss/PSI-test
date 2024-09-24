const express = require("express");
const router = express.Router();
const testRoute = require("./quizRoute");
const userRoute = require("./userRoute");
const authRoute = require("./authRoute");
const paymentRoute = require("./paymentRoute");

const authMiddleware = require("../../middlewares/authMiddleware");

router.get("/", (req, res) => {
  res.send("API is working!");
});

router.use("/test", testRoute);
router.use("/user", userRoute);
router.use("/auth", authRoute);
router.use("/payment", paymentRoute);

router.get("/protected", authMiddleware, (req, res) => {
  res.send("You are authorized to access this route!");
});

module.exports = router;
