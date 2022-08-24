import { MongoClient } from "mongodb";

const Schema = MongoClient.Schema;

export const userSchema = new Schema({
  name: {
    type: String,
    required: "Enter your name",
  },
  email: {
    type: String,
    required: "Enter your email",
  },
  password: {
    type: String,
    required: [true, "Please enter your password."],
    minlength: [6, "Password must have 6 characters "],
  },
  created_date: {
    type: Date,
    default: Date.now(),
  },
});
