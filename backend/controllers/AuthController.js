import { UserModel } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(req.body.password, salt);

    console.log("Hello", req.body);
    return false;

    const user = await UserModel.create({
      name: name,
      email: email,
      password: password,
    });

    res
      .status(200)
      .json({ success: true, data: user, msg: "User created successfully" });
  } catch (e) {
    res.status(500).json({ success: false, msg: res });
  }
};

const signin = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!!user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword) {
        jwt.sign({ user }, "secretKey", (err, token) => {
          res.status(200).json({
            success: true,
            msg: "Login Successful",
            data: user,
            token,
          });
        });
      } else {
        res.status(400).json({ success: false, msg: "Invalid Password" });
      }
    } else {
      res.status(400).json({ success: false, msg: "Oppsss!!! User not found" });
    }
  } catch (e) {
    res.status(500).json({ success: false, msg: res });
  }
};

export default { signup, signin };
