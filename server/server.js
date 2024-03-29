// package imports
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import path from "path";

// files import
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socketIo/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)
app.use(cookieParser()); // to parse the cookies in incoming request object
// app.use();

app.use("/api/auth", authRoutes); // route for handling authentication
app.use("/api/messages", messageRoutes); // route for message
app.use("/api/users", userRoutes); // route for getting users

server.listen(PORT, async () => {
  await connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
