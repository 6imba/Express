const express = require("express")
const server = express()

const customMiddleware = (req, res, next) => { console.log("Middleware4")}

// custome middleware: on every request
server.use((req, res, next) => { console.log("Middleware1"); next()})
server.use((req, res, next) => { console.log("Middleware2"); next()})
server.use((req, res, next) => { console.log("Middleware3"); next()})

server.get("/", (req, res) => {
    console.log("Index page1.")
    res.send("Index page.")
    console.log("Index page2.")
})

//custome middlware: on /route1 request
server.get('/route1',customMiddleware,  (req,res) => {
    console.log('First request.')
})

server.get('/route2', (req,res) => {
    console.log('Second request.')
})

server.listen(8004, ()=>console.log('Run server ==> http://localhost:8004/'))

