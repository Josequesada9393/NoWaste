const mongoose = require('./ConnectDB')

const Schema = mongoose.Schema;


const postSchema = new Schema({
  title: String,
  date: Date,
  address: String,
  photo:{
      public_id: {
       type: String,
       required: true
        },
        url: {
        type: String,
          required: true
        }
  },
  coordinates:{
        lat: String,
        lng: String
  },
  ownerId: String,
  ownerName: String
},
  {collection: 'Posts'}
)

const PostModel = mongoose.model('PostModel', postSchema);

module.exports = PostModel;










const post = mongoose.model('post', postSchema);


module.exports = post;