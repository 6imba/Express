const userModel = require('../model/user-model')

// create new user
const createNewUser = async (req,res) => {
    const newUserDocument = new userModel(req.body) //instance new document with mongoose_model and save it in database.
    try{
        const token = await newUserDocument.generateAuthToken()
        await newUserDocument.save() //Save the instanced document into database-collection.
        res.cookie('jwt_token', token, { maxAge: 60000*5, httpOnly: true, secure: true })
        res.send("Create new user with generated token and set on cookie.")
    }
    catch(error){
        console.log(error)
        res.json({created:false, error})
    }
}

// login user
const logIn = async (req,res) => {
    try{
        console.log(req.headers)
        const requestedEmail = req.body.email
        const requestedPassword = req.body.password
        const user = await userModel.findOne({email: requestedEmail})
        if(user==null){
            throw "Invalid Credentials"
        }
        if(user.password == requestedPassword){
            const token = await user.generateAuthToken()
            await user.save()
            res.set('header_key', 'header_value')
            res.set('jwt_token', token)
            res.cookie('jwt_token', token)
            // res.cookie('jwt_token', token, { maxAge: 60000*5, httpOnly: true, secure: true })
            console.log({logged:true, message: "Logged in with generated token and set on cookie."})
            res.json({logged:true, message: "Logged in with generated token and set on cookie."})
            console.log('-------------------------------------------------------------------------------------')
        }else{
            throw "Invalid Credentials"
        }
    }
    catch(error){
        console.log(error)
        res.json({logged:false, error})
    }
}

module.exports = {createNewUser,logIn}