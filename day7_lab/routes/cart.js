const express = require("express");
const {
  getItemsFromCart,
  addItemToCart,
  updateItem,
  deleteItem,
  getCart,
} = require("../controller/cart");
const router = express.Router();

router.get("/", getCart);
router.get("/:id", getItemsFromCart);
router.post("/", addItemToCart);
router.put("/:id", updateItem);
router.delete("/", deleteItem);

module.exports = router;
