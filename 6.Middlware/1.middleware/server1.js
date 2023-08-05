const express = require("express")
const server = express()

// custome middleware
const x = (req, res, next) => { console.log("Middleware1"); next()};
const y = (req, res, next) => { console.log("Middleware2"); next()};
const z = (req, res, next) => { console.log("Middleware3"); next()};

server.get("/", x, y, z, (req, res) => {
    console.log("Index page1.")
    res.send("Index page.")
    console.log("Index page2.")
})

// middleware process http request before sending response.
// middleware either response error, resources, redirect to next middleware|route
// middleware modify the http request,
// sequesnce of middleware matters,
// custome middleware && express built-in middleware && third party-middleware.
// custome middleware can be a call back with three params(req, res, next)
// next route to next futher process, if no next it will just freez keep on loading,
// pre exist middleware in market: body-parser, express.static, morgan, session
// middleware kind of filter or modifies the http request.
// morgan, session
// middleware is just a simple nofe.js function that processes http request,
// .use() function of express(), is used to setup middleware(mount the specified middleware function(s) at the path which is being specified.)
// server.use("path", callback)

server.listen(8000, () => {
    console.log("Server run")
})



// app.use('/', miniAppRouter);// calling miniapp route
// app.use(express.static(staticPath));//  built-in express middleware to show static views.
// app.get("/", middleware, (req, res) => {})





//  Like traditional function expressions, arrow functions are not hoisted, and so you cannot call them before you declare them.
