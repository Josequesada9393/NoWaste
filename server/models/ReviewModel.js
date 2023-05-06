const mongoose = require('./ConnectDB')

const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  userId: Number,
  createdBy: String,
  review: String,
  name: String,
  photo: {
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
});














const review = mongoose.model('review', reviewSchema);


module.exports = review;