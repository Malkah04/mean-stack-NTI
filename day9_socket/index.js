const express = require("express");
const app = express();

const http = require("http");

const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new server(Server);

app.get("/", (req, res) => {
  // get messages from index.html
  res.sendFile(__dirname, "index.html");
});

// open connection
io.on("connection", (socket) => {
  console.log("new connection");
  // (الشخص اللي بيوصل الرساله)
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(5000, () => {
  console.log("5000");
});
