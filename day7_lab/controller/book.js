const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../models/book.json");
const userPath = path.join(__dirname, "../models/user.json");

const getBooks = (req, res) => {
  const books = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.status(200).json(books);
};

const getBookByName = (req, res) => {
  const name = req.params.name;
  const books = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const one = books.find((e) => e.name === name);
  if (!one) {
    return res.status(404).json({ message: "book not found" });
  }
  res.status(200).json(one);
};

const updateBookByName = (req, res) => {
  const name = req.params.name;
  const { price } = req.body;
  const books = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const one = books.find((e) => e.name === name);
  if (!one) {
    return res.status(404).json({ message: "book not found" });
  }
  one.price = price;
  fs.writeFileSync(filePath, JSON.stringify(books));
  res.status(201).json({ message: "book updated" });
};

const addBook = (req, res) => {
  let { name, price, publisher_id } = req.body;
  publisher_id = parseInt(publisher_id);
  const books = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const existbook = books.find((e) => e.name === name);
  if (existbook) {
    return res.status(400).json({ message: "book already exist" });
  }
  const users = JSON.parse(fs.readFileSync(userPath, "utf-8"));
  const isPublisher = users.find(
    (e) => e.type === "publisher" && e.id === publisher_id
  );
  if (!isPublisher) {
    return res.status(400).json({ message: "u r not a publisher" });
  }
  const lastBook = books[books.length - 1];
  const newId = lastBook.id + 1;
  books.push({ id: newId, name, price, publisher_id });
  fs.writeFileSync(filePath, JSON.stringify(books));
  res.status(201).json({ message: "book added" });
};

const deleteBook = (req, res) => {
  const name = req.params.name;
  let books = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const existbook = books.find((e) => e.name === name);
  if (!existbook) {
    return res.status(400).json({ message: "book not found" });
  }
  books = books.filter((e) => e.name !== name);
  fs.writeFileSync(filePath, JSON.stringify(books));
  res.status(200).json({ message: "book deleted " });
};

module.exports = {
  deleteBook,
  addBook,
  getBookByName,
  updateBookByName,
  getBooks,
};
