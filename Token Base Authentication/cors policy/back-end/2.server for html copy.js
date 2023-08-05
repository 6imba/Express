const express = require('express')
// const cors = require('cors')

const app = express();
const port = process.env.PORT || 8009;

// app.use(cors())
// app.use(function(req, res, next) {  
//     res.header('Access-Control-Allow-Origin', req.headers.origin);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// login user
app.get('/', async (req,res) => {
    res.send("Landing page!")
})
// login user
app.post('/login-user', async (req,res) => {
    console.log("----2222222222222222222222")
    res.send("2222222222222222222222")
})

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})