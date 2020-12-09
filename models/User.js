const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    min: 6
  },
  socialUsername: {
    type: String
  },
  clan: {
    name: String
  },
  data: {
    gold: {
      type: Number,
      required: true
    },
    hats: {
      type: Number,
      required: true
    },
    coins: {
      type: Number,
      required: true
    }
  },
  characters: {},
  properties: {}
});

module.exports = mongoose.model("User", userSchema);
