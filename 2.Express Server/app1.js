const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Hi, I am index page.")
})

app.get("/about", (req, res) => {
    res.send("Hi, I am about page.")
})

app.listen(8000, "127.0.0.1", (req, res) => {
    console.log("Request listening to the 127.0.0.1 port number 8000! http://localhost:8000")
})

