const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { defaultCharacters } = require("../lib/defaultCharacters");

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
    //jwt token
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ deviceId: req.body.deviceId })
      .populate("properties")
      .populate("characters");

    // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
