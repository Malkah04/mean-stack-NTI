const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    index: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    validate: {
      validator: function (v) {
        return /^(?=.*[0-9]).{8,}$/.test(v);
      },
      message: "Password must be at least 8 characters and contain a number",
    },
  },
  age: {
    type: Number,
    required: [true, "age is required"],
    min: 1,
    max: 120,
  },
  role: {
    type: String,
    enum: ["customer", "admin", "seller"],
    default: "customer",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
