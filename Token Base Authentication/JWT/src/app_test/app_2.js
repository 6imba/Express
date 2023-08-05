require('dotenv').config();
const express = require('express')
require('./db/conn.js')
const cors = require('cors');
const userModel = require('./model/user-model')

const app = express();
const port = process.env.PORT || 8006;

app.use(cors());
app.use(express.json())

// create new user
app.post('/create-user', async (req,res) => {
    const newUserDocument = new userModel(req.body) //instance new document with mongoose_model and save it in database.
    try{
        await newUserDocument.generateAuthToken()
        const response = await newUserDocument.save() //Save the instanced document into database-collection.
        console.log("New user with token: ",response)
        res.send(response)
    }
    catch(error){
        res.send(error)
    }
})

// login user
app.post('/login-user', async (req,res) => {
    try{
        const requestedEmail = req.body.email
        const requestedPassword = req.body.password
        const user = await userModel.findOne({email: requestedEmail})
        if(user==null){
            throw "Invalid Credentials"
        }
        if(user.password == requestedPassword){
            await user.generateAuthToken()
            await user.save()
            res.send("Logged in with generated token.")
        }else{
            throw "Invalid Credentials"
        }
    }
    catch(error){
        console.log(error)
        res.json({logged:false})
    }
})

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})