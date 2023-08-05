import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import router from './routes/webRoute.js'


// Set Template Engine:
app.set("view engine", "ejs")

// Middlware to server Static Files:
app.use(express.static('public'))

// Load routes:
app.use("/", router)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})