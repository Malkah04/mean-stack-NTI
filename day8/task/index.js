const express = require("express");
const mongoose = require("mongoose");
const userPath = require("./routes/user");
const prodPath = require("./routes/product");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connect to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userPath);
app.use("/api/product", prodPath);

app.listen(process.env.PORT, () => {
  console.log("server running on port 5000");
});
