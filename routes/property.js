const router = require("express").Router();
const Property = require("../models/Property");

router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
