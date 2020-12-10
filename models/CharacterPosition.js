const mongoose = require("mongoose");

const characterPositionSchema = new mongoose.Schema({
  positionX: {
    type: Number,
    required: true
  },
  positionZ: {
    type: Number,
    required: true
  },
  characterSet: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("CharacterPosition", characterPositionSchema);
