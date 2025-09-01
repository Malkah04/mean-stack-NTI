const express = require("express");
const {
  getBooks,
  getBookByName,
  addBook,
  updateBookByName,
  deleteBook,
} = require("../controller/book");
const router = express.Router();

router.get("/", getBooks);
router.get("/:name", getBookByName);
router.post("/", addBook);
router.put("/:name", updateBookByName);
router.delete("/:name", deleteBook);

module.exports = router;
