const express = require('express')
const userController = require('./controller/user.js')
const {getAllBlogs,getABlog,createNewBlog,updateBlog,deleteBlog} = require('./controller/blog.js.js')

const app = express()
const port = 8010

app.get('/api/user/all', userController.getAllUsers)
app.get('/api/user/:id', userController.getAUser)
app.post('/api/user/create', userController.createNewUser)
app.patch('/api/user/update/:para', userController.updateUser)
app.delete('/api/user/delete/:para', userController.deleteUser)

app.get('/api/blog/all', getAllBlogs)
app.get('/api/blog/:id', getABlog)
app.post('/api/blog/create', createNewBlog)
app.patch('/api/blog/update/:id', updateBlog)
app.delete('/api/blog/delete/:para', deleteBlog)

app.listen(port, (req,res) => {
    console.log(`Server started at http://localhost:${port}.`)
})

