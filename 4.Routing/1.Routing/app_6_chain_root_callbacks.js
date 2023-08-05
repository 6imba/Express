const express = require('express');
const app = express();

const port = 8000;

app.route("/api/user")
    .get((req, res) => {
        res.send("<h1>Home</h1>")
    })
    .post((req, res) => {
        res.send("<h1>Home</h1>")
    })
    .patch((req, res) => {
        res.send("<h1>Home</h1>")
    })
    .put((req, res) => {
        res.send("<h1>Home</h1>")
    })
    .delete((req, res) => {
        res.send("<h1>Home</h1>")
    })
    .all((req, res,next) => {
        res.send("<h1>Home</h1>") // get execute before all route
        next()
    })

app.listen(port, (req, res) => {
    console.log(`Request listening to the port number ${port}! http://localhost:8000`) // execute when server start.
})

// defining all route of all apis in same page makes code look bulk and messy.
// like right now we have user_api, we can further have post_api,product_api, and so on.
// So make separate file for routing.

