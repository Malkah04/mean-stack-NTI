const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // embedded
  address: {
    city: { type: String },
    country: { type: String },
  },
});

userSchema.pre("save", async function (next) {
  // random 15 digit in the password
  var salt = await bcrypt.genSalt(15);
  var hashPass = await bcrypt.hash(this.password, salt);
  this.password = hashPass;
  next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;
