const router = require("express").Router();

//Get all users
router.get("/", (req, res) => {
  res.send("Get all users endpoint");
});

//Get specific user data
router.get("/", (req, res) => {
  res.send("Get a specific user");
});

module.exports = router;
