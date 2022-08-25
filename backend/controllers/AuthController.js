import { UserModel } from "../models/User.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    let password = await bcrypt.hash(req.body.password, salt);

    const user = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: password,
    });

    res
      .status(200)
      .json({ success: true, data: user, msg: "User created successfully" });
  } catch (e) {
    res.status(500).json({ success: false, msg: res });
  }
};

export default { signup };
