const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const filePath = path.join(__dirname, "../models/user.json");
console.log(filePath);
const getAllUsers = async (req, res) => {
  // json.parse turn json to obj
  // const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  // res.status(200).json({ users });
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  // const { name, age, email } = req.body;
  // let users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  // users.push({ name, email, age });
  // fs.writeFileSync(filePath, JSON.stringify(users));
  // res.status(201).json({ message: "added " });
  const newUser = new User(req.body);
  const save = await newUser.save();
  res.status(201).json({ message: "registered", save });
};

const updateUserByEmail = (req, res) => {
  const { name, age, email } = req.body;
  let users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  let updated = users.find((e) => e.email === email);
  if (!updated) {
    return res.status(404).json({ message: "no user found to update" });
  }
  updated.name = name;
  updated.age = age;
  updated.email = email;
  fs.writeFileSync(filePath, JSON.stringify(users));
  res.status(200).json({ message: `user with ${email} is updated ` });
};

const updateById = async (req, res) => {
  try {
    const id = req.params.id;
    const { email, name, password, age } = req.body;
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: "user not exist to update" });
    }
    const newUser = User.findByIdAndUpdate(
      id,
      {
        $set: {
          email,
          name,
          age,
          password,
        },
      },
      { $new: true }
    );
    const sav = await newUser.save();
    res.status(201).join(sav);
  } catch (err) {}
};

const getUserBYId = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).join(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUserByEmail,
  getUserBYId,
  updateById,
};
