// const express=require('express')
const userColl = require("../Model/user");

const getalluser = async (req, res) => {
  let users;
  try {
    users = await userColl.find();
  } catch (err) {
    return console.log(err);
  }

  if (!users) {
    return res.status(404).json({ status: false });
  }
  return res.status(200).json({ status: true, users });
};

module.exports = getalluser;
