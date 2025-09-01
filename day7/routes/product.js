const express = require("express");
const {
  getAllProducts,
  addProduct,
  updateProductByName,
} = require("../controllers/product");
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", addProduct);
router.put("/", updateProductByName);

module.exports = router;
