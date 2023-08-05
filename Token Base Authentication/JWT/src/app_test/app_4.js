require('dotenv').config();
require('./db/conn.js')
const express = require('express')
const cors = require('cors')
const  cookieParser = require('cookie-parser')  
const userModel = require('./model/user-model')

const app = express();
const port = process.env.PORT || 8006;

app.use(express.json())
app.use(cors())
app.use(cookieParser()) 

// create new user
app.post('/api/create-user', async (req,res) => {
    const newUserDocument = new userModel(req.body) //instance new document with mongoose_model and save it in database.
    try{
        const token = await newUserDocument.generateAuthToken()
        await newUserDocument.save() //Save the instanced document into database-collection.
        res.cookie('jwt_token', token)
        res.send("Create new user with generated token and set on cookie.")
    }
    catch(error){
        console.log(error)
        res.json({created:false, error})
    }
})

// login user
app.post('/api/login-user', async (req,res) => {
    try{
        const requestedEmail = req.body.email
        const requestedPassword = req.body.password
        const user = await userModel.findOne({email: requestedEmail})
        if(user==null){
            throw "Invalid Credentials"
        }
        if(req.cookies.jwt){
            res.send({logged:true, message: "Already logged in with generated token and set on cookie."})
        }
        if(user.password == requestedPassword){
            const token = await user.generateAuthToken()
            await user.save()
            res.cookie('jwt_token', token)
            res.send({logged:true, message: "Logged in with generated token and set on cookie."})
        }else{
            throw "Invalid Credentials"
        }
    }
    catch(error){
        console.log(error)
        res.json({logged:false, error})
    }
})

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})



// # Vue.js — How To Proxy To Backend Server
//     - Explaining how to configure a proxy for backend API calls with an example.    
//     > backend  ==> app.post('/api/login-user', async (req,res) => {})
//     > frontend ==>
            // - component ==> 
                // axios.defaults.withCredentials = true;
                // const response = await axios.post("/api/login-user/", credentials)
//         - vuw.config.js ==> 
//             devServer: {
//                 proxy: {
//                 '^/api': {
//                     target: 'http://localhost:8006/',
//                     changeOrigin: true
//                 },
//                 }
//             }
//     > Reference: https://medium.com/bb-tutorials-and-thoughts/vue-js-how-to-proxy-to-backend-server-a562bad965eb


// cookie debug:
    // - res.cookie(name, value [, options])
    // - res.cookie('jwt_token', token)
    // - res.cookie('name', 'Amir Shrestha')
    // - res.cookie('name', 'Amir Shrestha', {sameSite: "none"})
    // - res.cookie('name', 'Amir Shrestha', {maxAge:30000})
    // - res.cookie('name', 'Amir Shrestha', { maxAge: 1000 * 60 * 10, httpOnly: false })
    // - res.cookie('jwt_token', token, {
    // -     expires: new Date(Date.now() + 30000),
    // -     httpOnly: true
    // - })
    // - console.log(res.cookie)
    // - console.log(res.apple)

// # cookie options:
    // - maxAge
    // - httpOnly
    // - sameSite
    // - expires
    // - domain
    // - encode
    // - path
    // - secure
    // - signed

// # 