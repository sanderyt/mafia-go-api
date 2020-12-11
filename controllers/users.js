const User = require("../models/User");
const Property = require("../models/Property");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getUser: async (req, res, next) => {
    const { uid } = req.params;
    try {
      const user = await User.findById(uid);
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  editUser: async (req, res, next) => {
    const { uid } = req.params;
    const newUser = req.body;

    try {
      const result = await User.findOneAndUpdate(uid, newUser);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getAllUserProperties: async (req, res, next) => {
    const { uid } = req.params;

    try {
      const user = await User.findById(uid).populate("properties");
      res.status(200).send(user.properties);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  addUserProperty: async (req, res, next) => {
    const { uid } = req.params;
    const newProperty = new Property(req.body);

    const user = await User.findById(uid);

    newProperty.owner = user;
    await newProperty.save();

    user.properties.push(newProperty);
    await user.save();

    res.status(200).json(newProperty);
  },

  deleteUserProperty: async (req, res, next) => {
    //replace user
  },

  getAllUserCharacters: async (req, res, next) => {
    //replace user
  },

  addUserCharacter: async (req, res, next) => {
    //replace user
  },

  editUserCharacter: async (req, res, next) => {
    //replace user
  },

  updateUserCurrency: async (req, res, next) => {
    const { uid } = req.params;
    const { gold, hats, coins } = req.body;

    const user = await User.findByIdAndUpdate(
      uid,
      {
        $inc: {
          "currency.hats": hats,
          "currency.coins": coins,
          "currency.gold": gold
        }
      },
      { new: false, useFindAndModify: false }
    );

    res.status(200).json(user);
  },

  getUserPropertyDefence: async (req, res, next) => {
    const { uid } = req.params;
  },

  addUserPropertyDefence: async (req, res, next) => {
    const { uid } = req.params;
  }
};
