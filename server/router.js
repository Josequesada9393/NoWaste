const router = require('express').Router()
const db = require('./db')
const user = require('./controller/controller')
const LoginController = require('./controller/LoginController')



router.get('/', (req, res) => {
  res.send(db.users)
} )

router.get('/fetchUser/:id')

router.post('/login', user.login)

router.put('/addItem', user.addItem)

router.put('/addReview', user.addReview)

router.get('/findFood/:id', user.findFood)

router.delete('/deleteItem/:userId/:itemId', user.deleteById)

// new login
router.post('/userLogin', LoginController.UserLogin)
router.post('/userRegister', LoginController.UserRegister)


module.exports = router