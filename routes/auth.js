const router = require("express").Router();
const User = require("../models/User");
const { defaultCharacters } = require("../lib/defaultCharacters");

//Register new user
router.post("/register", async (req, res) => {
  const characters = await defaultCharacters();

  const user = new User({
    name: req.body.name,
    deviceId: req.body.deviceId,
    socialUsername: req.body.socialUsername || null,
    fcmToken: req.body.fcmToken || null,
    clan: {
      name: null
    },
    currency: {
      gold: 0,
      hats: 0,
      coins: 0
    },
    characters,
    properties: []
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Login user
router.post("/login", async (req, res) => {
  const user = await User.findOne({ deviceId: req.body.deviceId });

  //Get the device token from FCM and post to DB

  if (!user) {
    return res.status(400).send("This device is not registered and new user");
  }

  res.send(user);
});

module.exports = router;
