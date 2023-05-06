const UserModel = require('../models/UserModel')
const mongoose = require('mongoose')
const cloudinary = require('../utils/cloudinary')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const user = require('../models/models');

// const user = require('../models/models')

exports.UserLogin = async (req, res) => {
  try {
    const { password, email } = await req.body;
    const ExistingUser = await UserModel.find({ email: email })
    if (!ExistingUser.length) {
      return `user ${email} not found`
    }

    let passwordCheck = await bcrypt.compare(password, ExistingUser[0].password);

    if (passwordCheck) {
      const token = jwt.sign({
        userId: ExistingUser[0]._id,
        userEmail: ExistingUser[0].email,
      },
        "RANDOM-TOKEN",
        { expiresIn: "24h" })

      res.status(200).send({
        message: 'login successful',
        email: ExistingUser[0].email,
        name: ExistingUser[0].name,
        token
      })
    }
  } catch (e) {
    res.status(404).send({
        message: "Email not found",
        e,
      })
  }
}

exports.UserRegister = async (req, res) => {
  try {
    const { name, email, password } = await req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.find({email: email })
    if (!newUser.length) {
    await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword
    });
      const newRegisteredUser = await UserModel.find({email: email });
      res.send(newRegisteredUser);
      console.log('new registered user', email)
      return
    }
    console.log(`user ${email} already registered`)
    res.send(newUser)

  } catch (error) {
    res.status(500).send({
      message: "Error creating user",
      error,
    })
  }
};