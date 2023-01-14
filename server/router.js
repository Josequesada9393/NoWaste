const router = require('express').Router()
const db = require('./db')
// const event = require('./controller/controller')

router.get('/', (req, res) => {
  res.send(db.users)
} )

router.post('/login', async (req, res) => {
  const email = await req.body.email;
  const password = await req.body.password;
  console.log(req.body)
  let found = false
  db.users.forEach(user => {
    if (user.email === email && user.password === password) {
      found = true;
    return res.json(user)
    }
    if (!found) {
      res.send('not found, please register')
    }
})
})

router.get('/getItems')
// router.post('',)

// router.delete('',)



module.exports = router