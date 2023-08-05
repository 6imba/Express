import express from "express"
import UserToken from "../models/UserToken.js";

const router = new express.Router()

// logout: create access token and refresh token:
router.delete("/", async (req, res) => {
	try {
        const userRefreshToken = await UserToken.findOne({refToken: req.body.refreshToken})
        if(userRefreshToken){
            await userRefreshToken.remove()
        }
        console.log("Logged out successfully!")
        return res.status(200).json({error:false, message: "Logged out successfully!"})
	} catch (err) {
        console.log(err)
        res.status(500).json({err:true, message:"Internal server error!"})
    }
});

export default router;

