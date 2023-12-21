const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 8000;

const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const userIdArr = {};

const updateUserList = () => {
  io.emit("userList", userIdArr);
};

io.on("connection", (socket) => {
  console.log("socket id", socket.id);

  socket.on("entry", (res) => {
    socket.emit("entrySuccess", { userId: res.userId });
    userIdArr[socket.id] = res.userId;

    console.log("userIdArr", userIdArr);
    updateUserList();
  });

  socket.on("disconnect", (res) => {
    delete userIdArr[socket.id];
    console.log(userIdArr);
    updateUserList();
  });

  socket.on("sendMsg", (res) => {
    const adminSocketId = Object.keys(userIdArr).find(
      (key) => userIdArr[key] === "admin"
    );
    // admin의 socket.id = adminSocketId

    io.to(adminSocketId).emit("chat", {
      userId: res.userId,
      msg: res.msg,
    });

    socket.emit("chat", {
      userId: res.userId,
      msg: res.msg,
    });
  });

  socket.on("adminMsg", (res) => {
    io.to().emit("chat", {
      userId: res.userId,
      msg: res.msg,
    });

    socket.emit("chat", {
      userId: "admin",
      msg: res.msg,
    });
  });
});
//  room 이란 개념도 있다. join

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
