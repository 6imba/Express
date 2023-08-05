const express = require('express')
const router = express.Router()
const {getAllBlogs,getABlog,createNewBlog,updateBlog,deleteBlog} = require('../controller/blog.js')

router.get('/api/blog/all', getAllBlogs)
router.get('/api/blog/:id', getABlog)
router.post('/api/blog/create', createNewBlog)
router.patch('/api/blog/update/:id', updateBlog)
router.delete('/api/blog/delete/:para', deleteBlog)

module.exports = router