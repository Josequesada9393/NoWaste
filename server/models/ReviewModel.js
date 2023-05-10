const mongoose = require('./ConnectDB')

const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  itemOwnerId: String,
  itemName: String,
  reviewerId: String,
  reviewerName: String,
  itemId: String,
  itemOwnerName: String,
  review: String,
  date: {
    type: Date,
    default: Date.now
  },
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
},
{collection: 'Reviews'});

const ReviewModel = mongoose.model('ReviewModel', reviewSchema);

module.exports = ReviewModel












const review = mongoose.model('review', reviewSchema);


module.exports = review;