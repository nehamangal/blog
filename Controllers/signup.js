// const express=require('express')
const userColl = require("../Model/user");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  let userfind;
  try {
    userfind = await userColl.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (userfind) {
    return res.status(400).json({ message: "User is Already present" });
  }

  const hashpassword = bcrypt.hashSync(password);
  const user = new userColl({
    name,
    email,
    password: hashpassword,
    blog:[]
  });
  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ status: true, user });
};

module.exports = signup;
