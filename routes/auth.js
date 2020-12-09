const router = require("express").Router();
const User = require("../models/User");

//Register new user
router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    deviceId: req.body.deviceId,
    data: {
      gold: 0,
      hats: 0
    }
  });

  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.status(400).send(err);
  }
});

//Login user
router.post("/login", (req, res) => {
  res.send("Login endpoint");
});

module.exports = router;
