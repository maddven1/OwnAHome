const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: false,
  },
  Address: {
    type: String,
    required: true,
    unique: false,
  },
  propertytype: {
    type: Number,
    required: true,
    unique: false,
  },
  contactname: {
    type: String,
    required: true,
    unique: false,
  },

  email: {
    type: String,
    required: true,
    unique: false,
  },
  Area: {
    type: String,
    required: true,
    unique: false,
  },
  Description: {
    type: String,
    required: false,
    unique: false,
  },
  date: {
    type: Date,
    required: false,
    unique: false,
  },
  approved: {
    type: Boolean,
    required: false,
    default: false,
    unique: false,
  },
  // wallet :{
  //     type:Number,
  //     required: false,
  //     default:0
  // }
});

module.exports = User = mongoose.model("Users", UserSchema);
