const express = require('express')
const userRouter = require('./routes/user')
const blogRouter = require('./routes/blog')

const app = express()
const port = 8010

app.use('/', (req,res) => res.send("Landing api route!"))
app.use('/api/user',userRouter)
app.use('/api/blog',blogRouter)

app.listen(port, (req,res) => {
    console.log(`Server started at http://localhost:${port}.`)
})

