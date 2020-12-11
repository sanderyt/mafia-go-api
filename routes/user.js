const router = require("express").Router();
const UsersController = require("../controllers/users");

/**
 * All users endpoint
 */
router.route("/").get(UsersController.getAllUsers);

router
  .route("/:uid")
  .get(UsersController.getUser)
  .patch(UsersController.editUser);

router
  .route("/:uid/properties")
  .get(UsersController.getAllUserProperty)
  .post(UsersController.addUserProperty)
  .delete(UsersController.deleteUserProperty);

router
  .route("/:uid/characters")
  .get(UsersController.getAllUserCharacters)
  .post(UsersController.addUserCharacter)
  .patch(UsersController.editUserCharacter);

module.exports = router;
