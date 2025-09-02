const express = require("express");
const {
  getAllProducts,
  getProdById,
  addProduct,
  updateProd,
  deleteProd,
  getAllProductBySellerId,
} = require("../controllers/product");
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProdById);
router.post("/", addProduct);
router.put("/:id", updateProd);
router.delete("/:id", deleteProd);
router.get("/prodSeller/:id", getAllProductBySellerId);
module.exports = router;
