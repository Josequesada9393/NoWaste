


const userSchema = newSchema({
  email: String,
  password: String,
  name: String,
  _id: Number
})


const reviewSchema = newSchema({
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


const postSchema = newSchema({
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