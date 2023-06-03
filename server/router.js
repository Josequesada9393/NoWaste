const router = require('express').Router()
const db = require('./db')
const user = require('./controller/controller')
const LoginController = require('./controller/LoginController')
const auth = require('./auth')

router.get('/', (req, res) => {
  res.send(db.users)
} )

// router.get('/fetchUser/:id')

// router.post('/login', user.login)

router.post('/addItem', user.addItem)

router.post('/addReview', user.addReview)

router.get('/findFood/:id', user.findAllOwnerItems);

router.get('/findReview/:id', user.fetchReview)

router.delete('/deleteItem/:userId/:itemId', user.deleteById)

// new login
router.post('/userLogin', LoginController.UserLogin)
router.post('/userRegister', LoginController.UserRegister)
//for authenticated points, add auth;


module.exports = router