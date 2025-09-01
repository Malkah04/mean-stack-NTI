const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../models/product.json");
const getAllProducts = (req, res) => {
  const prod = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.status(200).json(prod);
};

const addProduct = (req, res) => {
  const { pname, price } = req.body;
  if (!pname || !price) {
    res.status(400).json({ message: "price and name must entered" });
  }
  let prod = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  prod.push({ pname, price });
  fs.writeFileSync(filePath, JSON.stringify(prod));
  res.status(201).json({ message: "product added" });
};
const updateProductByName = (req, res) => {
  const { pname, price } = req.body;
  if (!pname || !price) {
    res.status(400).json({ message: "price and name must entered" });
  }
  const prod = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const findprod = prod.find((e) => e.pname === pname);
  findprod.pname = pname;
  findprod.price = price;
  fs.writeFileSync(filePath, JSON.stringify(prod));
  res.status(200).json({ message: `product ${pname} updated` });
};

module.exports = { addProduct, getAllProducts, updateProductByName };
