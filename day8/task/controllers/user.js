const User = require("../models/user");
const bcrypt = require("bcrypt");
const { resolveSoa } = require("dns");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const newUser = await new User(req.body);
    const user = await newUser.save();
    res.status(201).json("register");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.status(404).json({ message: "create account first" });
    }
    const isMatch = await bcrypt.compare(password, isUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid email or password" });
    }
    const token = jwt.sign(
      { id: isUser._id, name: isUser.name },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    res.status(200).json({ message: "login", token });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  const exist = await User.findById(id);
  if (!exist) {
    return res.status(400).json({ message: "user not exist" });
  }
  const deletedUser = await User.findByIdAndDelete(id);
  res.status(200).json({ message: "deleted", deletedUser });
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  const update = await User.findByIdAndUpdate(
    id,
    {
      $set: {
        name,
        email,
        password,
      },
    },
    { new: true }
  );
  res.status(200).json(update);
};

const getById = async (req, res) => {
  const id = req.params.id;
  const exist = await User.findById(id);
  if (!exist) {
    return res.status(400).json({ message: "user not exist" });
  }
  res.status(200).json(exist);
};

module.exports = {
  register,
  getAllUsers,
  login,
  deleteUserById,
  updateUserById,
  getById,
};
