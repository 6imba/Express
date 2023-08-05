const express = require('express')
const router = express.Router()
const {getAllBlogs,getABlog,createNewBlog,updateBlog,deleteBlog} = require('../controller/blog.js')

router.get('/all', getAllBlogs)
router.get('/:id', getABlog)
router.post('/create', createNewBlog)
router.patch('/update/:id', updateBlog)
router.delete('/delete/:id', deleteBlog)

module.exports = router