const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Property", propertySchema);
