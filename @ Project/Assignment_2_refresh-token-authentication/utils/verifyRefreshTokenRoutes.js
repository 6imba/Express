import jwt from "jsonwebtoken"
import UserToken from "../models/UserToken.js";

const verifyRefreshToken = (refreshToken) => {
    // console.log("Verifying refresh token...")
    const refreshTokenSecretKey = process.env.REFRESH_TOKEN_SECRET_KEY
    return new Promise((resolve,reject) => {
        UserToken.findOne({refToken: refreshToken}, (err,doc) => {
            if(!doc){ // check_1: if refresh token exist in database. 
                // console.log("Reject promise_1...")
                reject({error:true, message:"Invalid refresh token!"})
            }
            jwt.verify(refreshToken,refreshTokenSecretKey, (err,refTokenDetail) => {
                if(err){// check_2: verify the refresh token send with http request.
                    // console.log("Reject promise_2...")
                    reject({error:true, message:"Invalid refresh token!"})
                }
                // console.log("Resolve promise...")
                resolve({ error:false, refTokenDetail, message:"Valid refresh token!" })
            })
        })
    })
}

export default verifyRefreshToken