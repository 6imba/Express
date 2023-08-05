const express = require('express')

const app = express();
const port = process.env.PORT || 8009;

// login user
app.get('/', async (req,res) => {
    res.send("Landing page!")
})
// login user
app.post('/login-user', async (req,res) => {
    console.log("----2222222222222222222222")
    res.send("api response data ==> 2222222222222222222")
})

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})