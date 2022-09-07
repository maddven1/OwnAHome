const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const managerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

module.exports = manager = mongoose.model("Manager", managerSchema);
