import express from "express"
import User from "../models/User.js";
import generateTokens from "../utils/generateTokens.js";

const router = express.Router()

// landing
router.get("/", async (req, res) => {
	console.log("App API Landing Page !")
	res.send("App API Landing Page !")
});

// signup
router.post("/signup", async (req, res) => {
	try {
		await new User(req.body).save();
		// let response = await new User(req.body).save();
		// console.log(response)
		// const {_id,userName,email} = response
		// const newUser = {_id,userName,email}
		// console.log({ error: false, newUser:newUser, message: "Account created sucessfully" });
		// res.status(201).json({ error: false, newUser:newUser, message: "Account created sucessfully" });
		res.status(201).json({ error: false, message: "Account created sucessfully" });
	} catch (err) {
		console.log(err);
		console.log({ error: true, message: "Internal Server Error" });
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});

// login: create refresh token and access token:
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).json({ error: true, message: "Invalid email or password!" });
        if(user.password != req.body.password)
			return res.status(401).json({ error: true, message: "Invalid email or password!" });
		const { accessToken, refreshToken } = await generateTokens(user);
		console.log("Logged in successfully!");
		// console.log({error: false, accessToken, refreshToken, message: "Logged in successfully!"});
		res.status(200).json({error: false, accessToken, refreshToken, message: "Logged in successfully!"});
	} catch (err) {
		console.log("Server error ===> ",err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});

export default router;