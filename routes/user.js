const router = require("express").Router();
const User = require("../models/User");

/**
 * GET requests
 */
router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);

  res.send(user);
});

module.exports = router;
