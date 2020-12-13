const mongoose = require("mongoose");

const CharacterPosition = new mongoose.Schema({
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

module.exports = {
  CharacterPosition
};
