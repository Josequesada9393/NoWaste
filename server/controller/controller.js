const user = require('../models/models')
const mongoose = require('mongoose')
const cloudinary = require('../utils/cloudinary')



exports.login = async (req, res) => {
  try {
    const loginUser = await user.findOne({ email: req.body.email, password: req.body.password })
    loginUser.posts = loginUser.posts.sort((a, b) => a.date - b.date)
    res.status(200, "user login successful")
    res.send(loginUser)
  } catch (error) {
    console.log(error,'user not found')
    res.sendStatus(500)
  }
}

exports.addReview = async (req, res) => {
  try {
    console.log(req.body)
  const id = await req.body.id;
  const review = await req.body;
  await user.updateOne({ _id: id }, { $push: { reviews: review}})
  const newUser = await user.find({_id:id})
  res.send(newUser)
  } catch (error) {
    res.send(error)
  }
}


exports.findFood = async (req, res) => {
  try {
    const idToExclude = req.params.id;
    const users = await user.find({ _id: { $ne: idToExclude } })
    res.send(users)
  } catch (error) {
    console.log(errr, 'no food found')
  }
}


exports.addItem = async (req, res) => {
  const { title, date, address, photo, coordinates } = req.body

  try {

  const result = await cloudinary.uploader.upload(photo, {
      folder: "products",
      // width: 300,
      // crop: "scale"
    });
    const id = req.body.id;
    // const post = await req.body;
    const post = {
      title: title,
      date: date,
      address: address,
      photo: {
        public_id: result.public_id,
        url: result.secure_url
      },
      coordinates: coordinates
    }
    console.log(post.photo)
    if (!post.title || !post.date || !post.address || !post.photo.url) {
      return res.status(400).send('enter all fields')
    }
   await user.updateOne({ _id: id }, { $push: { posts: post } })
    const newUser = await user.findOne({ _id: id })
    newUser.posts = newUser.posts.sort((a, b) => a.date - b.date)
    res.send(newUser)
  } catch (error) {
    res.sendStatus(500)
    console.log(error, "item not added")
  }
}

exports.deleteById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId
    const userSel = await user.findById(userId)
    userSel.posts = userSel.posts.filter((el) => {
      return itemId !== el._id.valueOf()
    })
    userSel.posts = userSel.posts.sort((a, b) => a.date - b.date)
    await userSel.save()
    res.send(userSel)
  } catch (error) {
     res.sendStatus(500)
    console.log(error, "item not deleted")
  }
}