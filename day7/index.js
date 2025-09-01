const express = require("express"); //func
const userRouter = require("./routes/user");
const prodRouter = require("./routes/product");
const mongoose = require("mongoose"); // obj

const app = express(); // to make obj from func

// middleware(like door) to tell that every thing will convert to json
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/product", prodRouter);

mongoose
  .connect("mongodb://localhost:27017/shopping")
  .then(() => {
    console.log("connceted to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server running on port 3000");
});

// nvc
