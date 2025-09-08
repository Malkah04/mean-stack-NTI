const express = require("express");
const mongoose = require("mongoose");
const userPath = require("./routes/user");
const prodPath = require("./routes/product");
const cors = require("cors");
const pug = require("pug");

const dotenv = require("dotenv");
const User = require("./models/user");
dotenv.config();

const app = express();
app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./view");

// render users in page.pug
app.get("/", async function (req, res) {
  var users = await User.find();
  res.render("page", { users });
});

// (middleware)static page ,appear till the front is load
app.use(express.static("./static"));

app.use("/api/user", userPath);
app.use("/api/product", prodPath);

// cors ()
app.use(cors({ origin: "*" }));

// middleware (not found page)
app.use((req, res) => {
  res.status(404).json({ message: "no found" });
});

// middleware of any error
app.use((req, res, next) => {
  res.status(500).json({ message: "something went wrong" });
  next();
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connect to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("server running on port 5000");
});

// server side rendering (ssr)
// mvc => models controller view
// client side rendering (csr)
//api
