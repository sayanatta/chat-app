import express from "express";
// const {register,login} = require('../controllers/AuthController');
const router = express.Router();

router.post("/sign-up", (req, res) => {
  res.send("Hello!");
});

export default router;
