const express = require('express')
const router = express.Router()
const {getAllUsers,getAUser,createNewUser,updateUser,deleteUser} = require('../controller/user.js')

router.get('/api/user/all', getAllUsers)
router.get('/api/user/:id', getAUser)
router.post('/api/user/create', createNewUser)
router.patch('/api/user/update/:para', updateUser)
router.delete('/api/user/delete/:para', deleteUser)

module.exports = router