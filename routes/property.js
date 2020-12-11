// import firebase from "../firebase";
const router = require("express").Router();
const Property = require("../models/Property");
const User = require("../models/User");

// Get all properties being owned
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/add", async (req, res) => {
  const property = new Property({
    id: req.body.id,
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
    type: req.body.type,
    ownerId: req.body.ownerId,
    ownerName: req.body.ownerName,
    defenceSet: req.body.defenceSet,
    characterPostions: req.body.characterPositions
  });

  try {
    const newProperty = await property.save();
    res.send(newProperty);
  } catch (error) {
    res.status(400).send(err);
  }
});

// Post a new property and change owner
router.post("/win", async (req, res) => {
  /*
   * Data needed to make this request
   * 1. The building info (ID) that has been attacked
   * 2. The Mongoose ID of the attacking user & defending user
   * 3. The registration token of the losing defender to send a push notitication
   */

  const defenderToken = "13123";

  //   try {
  //     const response = await firebase
  //       .messaging()
  //       .sendToDevice(defenderToken, payload);
  //   } catch (error) {
  //     res.status(400).send(error);
  //   }
});

module.exports = router;
