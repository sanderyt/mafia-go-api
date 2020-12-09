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

/**
 * UPDATE
 */
router.put("/:id/edit", async (req, res) => {
  const userId = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      // prettier-ignore
      {$inc : {'data.$.gold' : 1}},
      { new: true }
    );
    res.send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
