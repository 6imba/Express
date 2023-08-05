const express = require('express')
const router = express.Router()
const {createNewUser,logIn} = require('../controller/user.js')
// const auth = require('../middleware/auth')

router.post('/', createNewUser)
router.post('/log-in', logIn)
// router.post('/log-in', auth, logIn)

module.exports = router