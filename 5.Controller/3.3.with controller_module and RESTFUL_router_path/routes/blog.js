const express = require('express')
const router = express.Router()
const {getAllBlogs,getABlog,createNewBlog,updateBlog,deleteBlog} = require('../controller/blog.js')

router.get('/', getAllBlogs)
router.get('/:id', getABlog)
router.post('/', createNewBlog)
router.patch('/:id', updateBlog)
router.delete('/:id', deleteBlog)

module.exports = router