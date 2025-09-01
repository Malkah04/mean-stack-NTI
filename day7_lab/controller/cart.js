const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../models/cart.json");

const getCart = (req, res) => {
  const cart = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.status(200).json(cart);
};

const getItemsFromCart = (req, res) => {
  let customerId = parseInt(req.params.id);
  const cart = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const items = cart.filter((e) => e.customerId === customerId);
  res.status(200).json(items);
};

const addItemToCart = (req, res) => {
  let { customerId, bookId, quantity } = req.body;
  const cart = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  cart.push({ customerId, bookId, quantity });
  fs.writeFileSync(filePath, JSON.stringify(cart));
  res.status(201).json({ message: "item added to cart" });
};

const updateItem = (req, res) => {
  let { customerId, bookId, quantity } = req.body;
  const cart = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  isItem = cart.find((e) => e.customerId === customerId && e.bookId === bookId);
  if (!isItem) {
    return res.status(400).json({ message: "no item to update" });
  }
  isItem.quantity = quantity;
  fs.writeFileSync(filePath, JSON.stringify(cart));
  res.status(200).json({ message: "item updated" });
};

const deleteItem = (req, res) => {
  let { customerId, bookId } = req.body;
  let cart = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  let isItem = cart.find(
    (e) => e.customerId === customerId && e.bookId === bookId
  );
  if (!isItem) {
    return res.status(400).json({ message: "no item to delete" });
  }
  cart = cart.filter(
    (e) => !(e.customerId === customerId && e.bookId === bookId)
  );
  fs.writeFileSync(filePath, JSON.stringify(cart));
  res.status(200).json({ message: "item deleted " });
};

module.exports = {
  deleteItem,
  updateItem,
  addItemToCart,
  getItemsFromCart,
  getCart,
};
