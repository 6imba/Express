import express from "express"
import {config} from "dotenv"
import dbConnect from "./db/conn.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"
import refreshTokenRoutes from "./routes/refreshTokenRoutes.js"
import logoutRoutes from "./routes/logoutRoutes.js"

config();
dbConnect();

const app = express()
const port = process.env.PORT
const corsOptions = {
    origin: '*',
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/refresh-token",refreshTokenRoutes)
app.use("/api/logout",logoutRoutes)

app.get("/", async (req, res) => {
	console.log("App Landing Page !")
	res.send("App Landing Page !")
});

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})