const express = require("express")
const server = express()


server.get("/", (req, res) => {
    console.log("Index page1.")
    res.send("Index page.")
    console.log("Index page2.")
})

// custome middleware
server.use((req, res, next) => { console.log("Middleware1"); next()})
server.use((req, res, next) => { console.log("Middleware2"); next()})
server.use((req, res, next) => { console.log("Middleware3"); next()})

server.listen(8000)



// pre avialable middleware:
server.use(middleware_name)

//custome middlware:
server.get('/route-url', middleware_name, callback)