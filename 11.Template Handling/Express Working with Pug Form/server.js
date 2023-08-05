const express = require('express');
const bodyParser = require('body-parser');

const server = express(); //initialize express by calling express

server.set("view engine", "pug");

// middleware
server.use(bodyParser.urlencoded({ extended: true })) // make sure every form inputted text is encoded properly.

// routing (defining route)
server.get("/", (req, res) => {
    res.render("form-with-get")
})

server.get("/form-with-get", (req, res) => {
    res.render("form-with-get")
})

server.get("/submit-form-with-get", (req, res) => {
    res.send(req.query)
})

server.get("/form-with-post", (req, res) => {
    res.render("form-with-post")
})

server.post("/submit-form-with-post", (req, res) => {
    res.send(req.body)
})

server.listen(3007)

