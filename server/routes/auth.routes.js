import express from "express";

import { loginUser, signupUser } from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/login", loginUser);
router.get("/signup", signupUser);

export default router;
