const express = require('express')
const router = express.Router()
const {getAllUsers,getAUser,createNewUser,updateUser,deleteUser} = require('../controller/user.js')

router.get('/', getAllUsers)
router.get('/:id', getAUser)
router.post('/', createNewUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router