import express from "express"
import jwt from "jsonwebtoken";
import verifyRefreshToken from "../utils/verifyRefreshTokenRoutes.js";

const router = new express.Router()

// login: create access token and refresh token:
router.post("/", async (req, res) => {
	try {
        const response  = await verifyRefreshToken(req.body.refreshToken)
		if(response.error){
			throw response
		}
		console.log(response)
		console.log("Refresh token verified...")
        const payload = { _id: response.verifiedRefTokenDetail._id };
		const accessToken = jwt.sign(
			payload,
			process.env.ACCESS_TOKEN_SECRET_KEY,
			{ expiresIn: "14m" }
		);
		console.log("Access token refreshed successfully!!! ", accessToken)
		res.status(200).json({
			error: false,
			accessToken,
			message: "Access token created successfully",
		});
	} catch (err) {
		console.log(err)
        res.status(400).json(err)
    }
});

export default router;



// Procedures:
	// // - login: create access token and refresh token:
	// - validate if the refresh token send by user is validate or not.
    // - if its valid then only send refresh token 
    // - else ask for login again