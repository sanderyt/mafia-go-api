const router = require("express").Router();

//Get users
router.get("/", (req, res) => {
  res.send("Get all users endpoint");
});

router.get("/", (req, res) => {
  res.send("Get a specific user");
});

module.exports = router;
