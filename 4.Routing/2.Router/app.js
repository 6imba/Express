const express = require('express');
const blogRouter = require('./routes/blog.js')
const userRouter = require('./routes/user.js')
const studentRouter = require('./routes/student.js')

const app = express()
const port = 8080;

app.use('/api/user',userRouter)
app.use('/api/blog',blogRouter)
app.use('/api/student',studentRouter)

app.listen(port, (req, res) => {
    console.log(`Request listening to the port number ${port}! http://localhost:8000`) // execute when server start.
})

// no need to give different path to all different api routes.
// we can hit api on the basis of methods,parameter rather than path name.