import express from "express";
import AuthController from "../controllers/AuthController.js";
const router = express.Router();

router.post("/sign-up", AuthController.signup);
router.post("/sign-in", AuthController.signin);

export default router;
