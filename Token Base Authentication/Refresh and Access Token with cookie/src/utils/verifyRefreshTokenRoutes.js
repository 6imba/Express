import jwt from "jsonwebtoken"
import userTokenModel from "../models/UserToken.js";

const verifyRefreshToken = async (refreshToken) => {
        try{
            const user = await userTokenModel.findOne({refToken: refreshToken}) //check_1: if refresh token exist in database.
            if(!user){
                throw 'Token not found in DB!'
            }
            const verifiedRefTokenDetail = await jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET_KEY) //check_2: verify the refresh token send with http request is valid token.
            return { error:false, verifiedRefTokenDetail, message:"Valid refresh token!..." }
        }    
        catch(err){
            return {error:true, message:"Invalid refresh token!",error_object:err}
        }
    }

export default verifyRefreshToken