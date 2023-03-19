const userColl = require("../Model/user");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;

  let userfind;
  try {
    userfind = await userColl.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (!userfind) {
    return res.status(400).json({ message: "User does not exit" });
  }

  const hashpassword = bcrypt.compareSync(password, userfind.password);

  if (!hashpassword) {
    return res.status(404).json({ message: "Password is incorrect" });
  }

  return res.status(201).json({ message: "Login Successfully",user:userfind });
};

module.exports = login;
