const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../models/user.json");
console.log(filePath);
const getAllUsers = (req, res) => {
  // json.parse turn json to obj
  const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.status(200).json({ users });
};

const createUser = (req, res) => {
  const { name, age, email } = req.body;
  let users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  users.push({ name, email, age });
  fs.writeFileSync(filePath, JSON.stringify(users));
  res.status(201).json({ message: "added " });
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

module.exports = { getAllUsers, createUser, updateUserByEmail };
