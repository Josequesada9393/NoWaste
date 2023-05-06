const mongoose = require('./ConnectDB')

const Schema = mongoose.Schema;


const postSchema = new Schema({
  userId: Number,
  createdBy: String,
  title: String,
  date: Date,
  address: String,
  photo: {
      public_id: {
       type: String,
       required: true
        },
        url: {
        type: String,
          required: true
        }
      },
      coordinates: [{
        lat: String,
        lng: String
      }]
})













const post = mongoose.model('post', postSchema);


module.exports = post;