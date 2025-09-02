const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const prod = await Product.find();
  res.status(200).json(prod);
};

const getProdById = async (req, res) => {
  const id = req.params.id;
  const prod = await Product.findById(id);
  if (!prod) {
    return res.status(400).json({ message: "product not found" });
  }
  res.status(200).json(prod);
};
const addProduct = async (req, res) => {
  const { name, price, sellerId } = req.body;
  if (!name || !price || !sellerId) {
    return res.status(404).json("name ,price and sellerid is required");
  }
  const prod = new Product({
    name,
    price,
    sellerId,
  });
  const ress = await prod.save();
  res.status(201).json(ress);
};
const updateProd = async (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  const prod = await Product.findByIdAndUpdate(
    id,
    {
      $set: {
        name,
        price,
      },
    },
    { new: true }
  );

  res.status(200).json({ message: "product updated", prod });
};
const deleteProd = async (req, res) => {
  const id = req.params.id;
  const exist = await Product.findById(id);
  if (!exist) {
    return res.status(400).json({ message: "product not exist" });
  }
  const deleted = await Product.findByIdAndDelete(id);
  res.status(200).json(deleted);
};
const getAllProductBySellerId = async (req, res) => {
  const sellerId = req.params.id;
  const prods = await Product.find({ sellerId });
  if (!prods) {
    return res.status(400).json({ message: "user have no product" });
  }
  res.status(200).json(prods);
};

module.exports = {
  deleteProd,
  updateProd,
  getAllProducts,
  getProdById,
  addProduct,
  getAllProductBySellerId,
};
