const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new mongoose.Schema({
  mapboxId: {
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
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  defenceSet: {
    type: Boolean,
    required: true
  },
  characterPositions: [
    {
      type: Schema.Types.ObjectId,
      ref: "CharacterPosition"
    }
  ]
});

module.exports = mongoose.model("Property", propertySchema);
