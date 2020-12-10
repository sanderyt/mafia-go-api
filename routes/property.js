import firebase from "../firebase";
const router = require("express").Router();
const Property = require("../models/Property");

// Get all properties being owned
router.get("/", async (req, res) => {
  res.send("Getting all owned properties endpoint");
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

  try {
    const response = await firebase
      .messaging()
      .sendToDevice(defenderToken, payload);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
