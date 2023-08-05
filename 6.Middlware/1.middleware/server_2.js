const express = require("express")
const server = express()

// custome middleware
const x = (req, res, next) => { console.log("Middleware1"); next()};
const y = (req, res, next) => { console.log("Middleware2"); next()};
const z = (req, res, next) => { console.log("Middleware3"); next()};

// server.use(x)
// server.use(y)
// server.use(z)

server.use(x,y,z)

server.get("/", (req, res) => {
    console.log("Index page1.")
    res.send("Index page.")
    console.log("Index page2.")
})


server.listen(8004, () => {
    console.log("Server run")
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
// middleware is just a simple nodejs function that processes http request,
// .use() function of express(), is used to setup middleware(mount the specified middleware function(s) at the path which is being specified.)
// server.use("path", callback)

// app.use('/', miniAppRouter);// calling miniapp route
// app.use(express.static(staticPath));//  built-in express middleware to show static views.
// app.get("/", middleware, (req, res) => {})

// app.get("/", middleware, (req, res) => {}) ==> use middleware on /landing route request.
// app.get("/profile", middleware, (req, res) => {}) ==> use middleware on /profile route request.
// app.get(middleware, (req, res) => {}) ==> use middleware on all route request.


//  Like traditional function expressions, arrow functions are not hoisted, and so you cannot call them before you declare them.
