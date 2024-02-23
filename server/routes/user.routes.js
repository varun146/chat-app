// package imports
import express from 'express'


// files import
import { getUsersForSidebar } from '../controllers/users.controller.js';
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// get routes for getting all the users for the sidebar at the client side
router.get("/", protectRoute, getUsersForSidebar);


export default router;
