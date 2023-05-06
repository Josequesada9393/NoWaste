const UserModel = require('../models/UserModel')
const mongoose = require('mongoose')
const cloudinary = require('../utils/cloudinary')
const bcrypt = require('bcrypt')
// const user = require('../models/models')




// exports.UserLogin = async (req, res) => {
//   try {
//     const loginUser = await user.findOne({ email: req.body.email, password: req.body.password })
//     loginUser.posts = loginUser.posts.sort((a, b) => a.date - b.date)
//     res.status(200, "user login successful")
//     res.send(loginUser)
//   } catch (error) {
//     console.log(error,'user not found')
//     res.sendStatus(500)
//   }
// }

exports.UserRegister = async (req, res) => {

  try {
    const { name, email, password } = await req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword
    });

    res.send(newUser)


  } catch (error) {
    res.status(500).send({
      message: "Error creating user",
      error,
    })
  }
};