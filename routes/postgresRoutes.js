import express from "express";
import { createUser } from "../controllers/postgresControlller.js";

const router = express.Router();

// create user route
router.route('/create').post(createUser);

export default router;