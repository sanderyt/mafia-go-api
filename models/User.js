const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  fcmToken: {
    type: String
  },
  clan: {
    name: String
  },
  currency: {
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
  characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
