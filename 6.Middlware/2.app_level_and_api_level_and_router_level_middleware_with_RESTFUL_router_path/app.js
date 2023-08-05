const express = require('express')
const userRouter = require('./routes/user')
const blogRouter = require('./routes/blog')
const {appLevelMiddleware_1,appLevelMiddleware_2} = require('./middleware/1.appLevelMiddleware.js')

const app = express()
const port = 8010

app.use(appLevelMiddleware_1)
app.use(appLevelMiddleware_2)

// app.use('/', (req,res) => res.send("Landing api route!"))
app.use('/api/user',userRouter)
app.use('/api/blog',blogRouter)

app.get('/', (req,res) => res.send("Landing api route!"))

app.listen(port, (req,res) => {
    console.log(`Server started at http://localhost:${port}.`)
})

