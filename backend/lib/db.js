import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection established"))
  .catch((err) => console.error(err));
