const User = require("../models/User");
const Property = require("../models/Property");

const { defaultCharacters } = require("../lib/defaultCharacters");

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
      const user = await User.findById(uid)
        .populate("properties")
        .populate("characters");
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
      res.status(200).json(user.properties);
    } catch (error) {
      res.status(400).json(error);
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
    const { uid } = req.params;
    try {
      const user = await User.findById(uid);
      const characters = await defaultCharacters();
      user.characters = characters;
      const updatedUser = user.save();
      res.status(201).json(updatedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  editUserCharacter: async (req, res, next) => {
    //replace user
  },

  updateUserCurrency: async (req, res, next) => {
    const { uid } = req.params;
    const { gold, hats, coins } = req.body;

    try {
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

      const updatedUser = await User.findById(uid);
      res.status(200).json(updatedUser.currency);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  getUserPropertyDefence: async (req, res, next) => {
    const { propertyId } = req.params;

    try {
      const property = await Property.findById(propertyId);
      res.status(201).json(property.characterPositions);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  addUserPropertyDefence: async (req, res, next) => {
    const { propertyId, uid } = req.params;
    try {
      const property = await Property.findById(propertyId);

      const positions = req.body.Items;
      property.characterPositions = positions;

      await property.save();

      const user = await User.findById(uid).populate("properties");

      res.status(201).json(user.properties);
    } catch (error) {
      res.status(400).json(error);
    }
  }
};
