const express = require('express')
const router = express.Router()
const {getAllUsers,getAUser,createNewUser,updateUser,deleteUser,aboutPage} = require('../controller/user.js')
const {apiLevelMiddleware_1,apiLevelMiddleware_2} = require('../middleware/2.userApiLevelMiddleware.js')
const {getAllMware,getOneMware,createOneMware,updateOneMware,deleteOneMware,aboutRouteLevelMware} = require('../middleware/3.routeLevelMiddleware.js')

router.use(apiLevelMiddleware_1,apiLevelMiddleware_2)
router.get('/about',aboutRouteLevelMware)

router.get('/', getAllMware, getAllUsers)
// router.get('/:id', getOneMware, getAUser)
router.get(':id', getOneMware, getAUser)
router.post('/', createOneMware, createNewUser)
router.patch('/:id', updateOneMware, updateUser)
router.delete('/:id', deleteOneMware, deleteUser)
router.get('/about', aboutPage)
// router.get('/about/:id', aboutPage)

module.exports = router