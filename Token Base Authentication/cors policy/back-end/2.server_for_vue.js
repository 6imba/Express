const express = require('express')

const app = express();
const port = process.env.PORT || 8009;

// login user
app.get('/', async (req,res) => {
    res.send("Landing page!")
})
// login user
app.post('/login-user', async (req,res) => {
    console.log("Hit the server login post api!........................... ")
    res.json({a:1,b:2,c:3})
})

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})