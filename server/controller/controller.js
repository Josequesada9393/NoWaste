const user = require('../models/models')
const mongoose = require('mongoose')
const cloudinary = require('../utils/cloudinary');
const PostModel = require('../models/PostModel')


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


// exports.findFood = async (req, res) => {
//   try {
//     const idToExclude = req.params.id;
//     const users = await user.find({ _id: { $ne: idToExclude } })
//     res.send(users)
//   } catch (error) {
//     console.log(errr, 'no food found')
//   }
// }

//updated
exports.addItem = async (req, res) => {
  const { title, date, address, photo, coordinates, id, ownerName } = await req.body;
  console.log(id)
  try {
  const result = await cloudinary.uploader.upload(photo, {
      folder: "products",
    });

    const photoItem = {
      public_id: result.public_id,
      url: result.secure_url
    }
    if (!title || !date || !address || !photoItem.url) {
      return res.status(400).send('enter all fields')
    }
     const newPost = {
      title: title,
      date: date,
      address: address,
      photo: photoItem,
      coordinates: coordinates,
      ownerId: id,
      ownerName: ownerName
    }

await PostModel.create(newPost)
  } catch (error) {
    res.sendStatus(500)
    console.log(error, "item not added")
  }
}

exports.findAllOwnerItems = async (req, res) => {
  const items = await PostModel.find({});
  console.log('hello')
  console.log(items)
  res.send(items)
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