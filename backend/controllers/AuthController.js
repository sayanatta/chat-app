// import UserModel from "../models/User.js";

const signup = async (req, res) => {
  //   const { name, email, password } = req.body;
  //   const user = await UserModel.create(req.body);
  //   res.status(200).json({ success: true, data: user });
  res.send("Hello Developer, Calling API Properly!!!");
};

// module.exports = { signup };
export default { signup };
