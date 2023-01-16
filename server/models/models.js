const mongoose = require('./ConnectDB')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  posts: [
    {
      title: String,
      date: Date,
      address: String,
      photo: String
    }
  ]
},
  { collection: 'users' });



const user = mongoose.model('user', userSchema);


module.exports = user;