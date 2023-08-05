require('dotenv').config();
require('./db/conn.js')
const express = require('express')
const cors = require('cors')
const  cookieParser = require('cookie-parser')  
const userRouter = require('./routes/user.js')

const app = express();
const port = process.env.PORT || 8006;

var corsOptions = {
    origin: '*',
    credentials: true
};
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json())
app.use(cookieParser()) 
app.use('/api/user',userRouter)

app.get('/', (req,res) => {
    console.log("Api landing page ...")
    res.send("Api landing page ...")
})

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})

