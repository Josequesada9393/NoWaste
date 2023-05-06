const mongoose = require('./ConnectDB')

const Schema = mongoose.Schema;


const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: false
  }
},
  {
  collection: 'CurrentUsers'
})




const UserModel = mongoose.model('UserModel', userSchema);


module.exports = UserModel;