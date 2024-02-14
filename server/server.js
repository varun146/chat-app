// package imports
import dotenv from "dotenv";
import express from "express";

// files import
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)

app.use("/api/auth", authRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(PORT, async () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
