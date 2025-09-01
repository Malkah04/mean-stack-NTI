const express = require("express");
const userRouter = require("./routes/user");
const bookRouter = require("./routes/book");
const cartRouter = require("./routes/cart");

const app = express();

app.use(express.json());
app.use("/api/book", bookRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
