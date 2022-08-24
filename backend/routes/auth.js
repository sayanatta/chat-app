import express from "express";
import AuthController from "../controllers/AuthController.js";
const router = express.Router();

router.post("/sign-up", AuthController.signup);

export default router;
