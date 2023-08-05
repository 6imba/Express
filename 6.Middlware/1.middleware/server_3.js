const express = require("express")
const server = express()

// custome middleware
const x = (req, res, next) => { console.log("Middleware1"); next()};
const y = (req, res, next) => { console.log("Middleware2"); next()};
const z = (req, res, next) => { console.log("Middleware3"); next()};

server.use(x)
server.use(y)
server.use(z)

server.get("/", (req, res) => {
    console.log("Index page1.")
    res.send("Index page.")
    console.log("Index page2.")
})

server.get("/about", (req, res) => {
    console.log("About page1.")
    res.send("About page.")
    console.log("About page2.")
})


server.listen(8004, () => {
    console.log("Server run")
})



// middleware process http request before sending response.
// middleware either response error, resources, redirect to next middleware|route
// middleware modify the http request,
// sequence of middleware matters,
// custom middleware && express built-in middleware && third party-middleware.
// custom middleware can be a callback with three params(req, res, next)
// next route to next further process, if no next it will just freeze keep on loading,
// pre exist third party-middleware in market: body-parser, express.static, morgan, session
// middleware kind of filter or modifies the http request.
// middleware is just a simple nodejs function that processes http request,
// middleware is just a simple nodejs function that runs before route callback,
// .use() function of express(), is used to setup middleware(mount the specified middleware function(s) at the path which is being specified.)
// server.use("path", callback)

// app.use('/', miniAppRouter);// calling miniapp route
// app.use(express.static(staticPath));//  built-in express middleware to show static views.
// app.get("/", middleware, (req, res) => {})

// app.get("/", middleware, (req, res) => {}) ==> use middleware on /landing route request.
// app.get("/profile", middleware, (req, res) => {}) ==> use middleware on /profile route request.
// app.get(middleware, (req, res) => {}) ==> use middleware on all route request.
// app.use(middleware) ==> use middleware on all route request.


//  Like traditional function expressions, arrow functions are not hoisted, and so you cannot call them before you declare them.
