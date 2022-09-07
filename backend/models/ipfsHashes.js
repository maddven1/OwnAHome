const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Hash = new Schema({
  id : {
    type: String,
    required: true
  },
  hash :{
      type: String,
      required: true,
  }
});

module.exports = ipfsHash = mongoose.model("ipfsHash", Hash);
