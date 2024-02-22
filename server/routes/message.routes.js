// third party imports
import express from 'express'

// file imports
import protectRoute from "../middleware/protectRoute.js";
import { sendMessage, getMessages } from '../controllers/message.controller.js'

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);


export default router;
