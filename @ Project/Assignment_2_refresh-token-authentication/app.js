import express from "express"
import {config} from "dotenv"
import dbConnect from "./db/conn.js"
import authRoutes from "./routes/authRoutes.js"
import refreshTokenRoutes from "./routes/refreshTokenRoutes.js"
import logoutRoutes from "./routes/logoutRoutes.js"
import cors from "cors"

config();
dbConnect();

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/refresh-token",refreshTokenRoutes)
app.use("/api/logout",logoutRoutes)
app.use(cors())

app.get("/", async (req, res) => {
	console.log("Landing Page !")
	res.send("Landing Page !")
});

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})