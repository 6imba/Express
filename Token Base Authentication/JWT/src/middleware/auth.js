const verifyToken = require('../utils/verifyToken')

const auth = async (req,res,next) => {
    if(!req.cookies.jwt_token || (await verifyToken(req.cookies.jwt_token)).error){
        console.log("Token not authenticated. So need to login!")
        next()
    }
    else{
        console.log("Token authenticated. So no need to login!")
    }   
}

module.exports = auth