import express from "express";
import cors from "cors";
import { dbConnect } from "../backend/lib/db.js";
import AuthRouter from "./routes/auth.js";
import BodyParser from "body-parser";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use("/api", AuthRouter);

dbConnect();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
