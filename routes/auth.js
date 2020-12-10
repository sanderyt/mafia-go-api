const router = require("express").Router();
const User = require("../models/User");

//Register new user
router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    deviceId: req.body.deviceId,
    socialUsername: req.body.socialUsername || null,
    fcmToken: req.body.fcmToken || null,
    clan: {
      name: null
    },
    data: {
      gold: 0,
      hats: 0,
      coins: 0
    },
    characters: null,
    properties: null
  });

  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.status(400).send(err);
  }
});

//Login user
router.post("/login", async (req, res) => {
  const user = await User.findOne({ deviceId: req.body.deviceId });

  if (!user) {
    return res.status(400).send("This device is not registered and new user");
  }

  res.send(user);
});

module.exports = router;
