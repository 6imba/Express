const jwt = require('jsonwebtoken')
const userModel = require('../model/user-model')

const auth = async (req,res,next) => {
    try{
        const cookieToken = req.cookies.jwt_token;
        const verifyToken = jwt.verify(cookieToken, process.env.SECRET_KEY)
            // verify if token_attached_with_cookie is genuine token or not.
            // verify genuine token ==>  { _id: '635ba22ea012f56143f478f4', iat: 1666949678, exp: 1666979678 }
            // here _id: '635ba22ea012f56143f478f4' is the id of user.
        console.log("verify genuine token ==> ",verifyToken)
        const loggedUser = await userModel.findOne({_id:verifyToken._id})
        console.log(loggedUser)

        res.send({logged:true, message: "Already logged in with generated token and set on cookie."})
    }catch(error){
        console.log("Error ==> ", error)
        res.status(401).send(error);
    }
}

module.exports = auth
 