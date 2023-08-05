import express from "express"
import User from "../models/User.js";
import generateTokens from "../utils/generateTokens.js";

const router = new express.Router()

// landing
router.get("/", async (req, res) => {
	console.log("API Landing Page !")
	res.send("API Landing Page !")
});

// signup
router.post("/signup", async (req, res) => {
	try {
		await new User(req.body).save();
		res.status(201).json({ error: false, message: "Account created sucessfully" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});

// login: create refresh token and access token:
router.post("/login", async (req, res) => {
	try {
		console.log("Hit /auth/login api!")
		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).json({ error: true, message: "Invalid email or password" });
        if(user.password != req.body.password)
			return res.status(401).json({ error: true, message: "Invalid email or password" });

		const { accessToken, refreshToken } = await generateTokens(user);

		res.status(200).json({
			error: false,
			accessToken,
			refreshToken,
			message: "Logged in sucessfully",
		});
	} catch (err) {
		console.log("Server error ===> ",err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});

// login: create access token and refresh token:


export default router;