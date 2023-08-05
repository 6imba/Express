const express = require('express')
const router = express.Router()
const {getAllUsers,getAUser,createNewUser,updateUser,deleteUser} = require('../controller/user.js')

router.get('/all', getAllUsers)
router.get('/:id', getAUser)
router.post('/create', createNewUser)
router.patch('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router