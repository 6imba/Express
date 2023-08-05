const jwt = require("jsonwebtoken")

const verifyToken = async (token) => {
        try{
            const verifiedAccessTokenDetail = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET_KEY) //check_2: verify the refresh token send with http request is valid token.
            return { error:false, verifiedAccessTokenDetail, message:"Valid refresh token!..." }
        }    
        catch(err){
            return {error:true, message:"Invalid token!",error_object:err}
        }
    }

module.exports =  verifyToken