const user = require('../models/models')
const mongoose = require('mongoose')
const cloudinary = require('../utils/cloudinary');
const PostModel = require('../models/PostModel')
const ReviewModel = require('../models/ReviewModel')


exports.addReview = async (req, res) => {
  try {
    const { itemOwnerId, reviewerId, reviewerName, itemId, itemOwnerName, review, photo } = await req.body;
    const newReview = await req.body;
    await ReviewModel.create(newReview)
  } catch (error) {
    res.send(error, 'review not added')
  }
}

exports.fetchReview = async (req, res) => {
  try {
    const { id } = await req.params;
    const userReviews = await ReviewModel.find({ itemOwnerId: id });
    res.send(userReviews)
  } catch (error) {
  res.send(error, 'reviews not fetched')
  }
}

exports.addItem = async (req, res) => {
  const { title, date, address, photo, coordinates, id, ownerName } = await req.body;
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

await PostModel.create(newPost);
await res.status(200).json('success')

  } catch (error) {
    res.sendStatus(500)
    console.log(error, "item not added")
  }
}

exports.findFood = async (req, res) => {
  const items = await PostModel.find({});
  res.send(items)
}


exports.deleteById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    await PostModel.deleteOne({_id: itemId, ownerId: userId});
    await res.status(200).json('success')

  } catch (error) {
     res.sendStatus(500)
    console.log(error, "item not deleted")
  }
}