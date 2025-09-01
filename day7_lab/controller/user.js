const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../models/user.json");

const getAllUsers = (req, res) => {
  const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.status(200).json(users);
};
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const user = users.find((e) => e.id === id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.status(200).json(user);
};
const addUser = (req, res) => {
  const { name, type } = req.body;
  const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const lastUser = users[users.length - 1];
  newId = lastUser.id + 1;
  users.push({ id: newId, name, type });
  fs.writeFileSync(filePath, JSON.stringify(users));
  res.status(201).json({ message: "User added successfully" });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const user = users.find((e) => e.id === id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  user.name = name;
  fs.writeFileSync(filePath, JSON.stringify(users));
  res.status(200).json({ message: "user updated" });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  let users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const user = users.find((e) => e.id === id);
  if (!user) {
    return res.status(404).json({ message: "user already not found" });
  }
  users = users.filter((e) => e.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(users));
  res.status(200).json({ message: "user deleted " });
};
module.exports = { deleteUser, updateUser, getAllUsers, getUserById, addUser };
