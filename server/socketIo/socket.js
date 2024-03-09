import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Socket with id ${socket.id} is connected`);

  socket.on("disconnect", () => {
    console.log(`Socket with id ${socket.id} disconnected`);
  });
});

export { app, server, io };
