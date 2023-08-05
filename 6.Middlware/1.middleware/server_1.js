const express = require("express")
const server = express()

// custome middleware
const x = (req, res, next) => { console.log("Middleware1*"); next()};
const y = (req, res, next) => { console.log("Middleware2**"); next()};
const z = (req, res, next) => { console.log("Middleware3***"); next()};

server.get("/", x, y, z, (req, res) => {
    console.log("Index page1.")
    res.send("Index page.")
    console.log("Index page2.")
})

server.listen(8004, () => {
    console.log("Server run => http://localhost:8004")
})
