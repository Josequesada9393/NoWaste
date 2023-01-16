const user = require('../models/models')
const mongoose = require('mongoose')


exports.login = async (req, res) => {
  try {
    const loginUser = await user.findOne({ email: req.body.email, password: req.body.password })
    console.log(loginUser)
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
  const id = await req.body.id;
    const review = await req.body;
        console.log(review)

  await user.updateOne({ _id: id }, { $push: { reviews: review}})
  const newUser = await user.find({_id:id})
  res.send(newUser)
  } catch (error) {
    res.send(error)
  }

}

// exports.fetchUser = async (req, res) => {
//   try {
//     const id = req.params;
//     console.log(req.params, "where is this")
//     const user = await user.findOne({ _id: id })
//     res.send(user)
//   } catch (error) {
//     console.log('i didnt do this')
//   }
// }


exports.findFood = async (req, res) => {
  try {
    console.log("is this happening?")
    const idToExclude = req.params.id;
    const users = await user.find({ _id: { $ne: idToExclude } })
    console.log(users)
    res.send(users)
  } catch (error) {
    console.log('no food found')
  }
}


exports.addItem = async (req, res) => {
  try {
    // console.log(req.body)
    const id = req.body.id;
    const post = await req.body;

    if (!post.title || !post.date || !post.address || !post.photo) {
      return res.status(400).send('enter all fields')
    }
   await user.updateOne({ _id: id }, { $push: { posts: post } })
    const newUser = await user.findOne({ _id: id })
    newUser.posts = newUser.posts.sort((a, b) => a.date - b.date)
    res.send(newUser)
  } catch (error) {
    console.log(error)
  }
}

exports.deleteById = async (req, res) => {
  try {
    console.log('here')
    const userId = req.params.userId;
    const itemId = req.params.itemId
    const userSel = await user.findById(userId)
    console.log("selected", userSel.posts)
    userSel.posts = userSel.posts.filter((el) => {
      console.log(el.title, itemId, el._id.valueOf(), itemId === el._id.valueOf())
      return itemId !== el._id.valueOf()
    })
    console.log("userSelposts", userSel.posts)
    userSel.posts = userSel.posts.sort((a, b) => a.date - b.date)
    await userSel.save()
    res.send(userSel)
  } catch (error) {
    console.log(error)

  }
}