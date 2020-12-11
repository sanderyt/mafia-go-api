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
  .get(UsersController.getAllUserProperties)
  .post(UsersController.addUserProperty)
  .delete(UsersController.deleteUserProperty);

router
  .route("/:uid/characters")
  .get(UsersController.getAllUserCharacters)
  .post(UsersController.addUserCharacter)
  .patch(UsersController.editUserCharacter);

// Special endpoints
router.route("/:uid/currency").patch(UsersController.updateUserCurrency);

router
  .route("/:uid/properties/defence")
  .post(UsersController.addUserPropertyDefence);

module.exports = router;
