const express = require('express')
const userRouter = require('./routes/user')
const blogRouter = require('./routes/blog')

const app = express()
const port = 8010

app.use(userRouter)
app.use(blogRouter)

app.listen(port, (req,res) => {
    console.log(`Server started at http://localhost:${port}.`)
})

