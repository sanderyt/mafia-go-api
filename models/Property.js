const mongoose = require("mongoose");
const CharacterPosition = require("../models/CharacterPosition");
const Schema = mongoose.Schema;

const propertySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  defenceSet: {
    type: Boolean,
    required: true
  },
  characterPositions: {
    type: Schema.Types.ObjectId,
    ref: CharacterPosition
  }
});

module.exports = mongoose.model("Property", propertySchema);
