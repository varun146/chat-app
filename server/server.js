import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import express from "express";

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
