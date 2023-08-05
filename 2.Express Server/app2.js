const express = require('express')
const app = express()
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hi, I am index page.")
})

app.get("/about", (req, res) => {
    res.send("Hi, I am <b><i>about</i></b> page.")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Hi, I am contact page.<h1>")
})

app.get("/service1", (req, res) => {
    res.write("<h1>Hi, I am service page.<h1>")
    res.write("<h2>My services</h2>")
    res.write("Web Development")// expect and wait for more response
})
//see page doesnt end loading

app.get("/service2", (req, res) => {
    res.write("<h1>Hi, I am service page.<h1>")
    res.write("<h2>My services</h2>")
    res.write("Web Development")
    res.send()//end/stop expecting and wait for more response
})
//see page end loading

app.listen(port, (req, res) => {
    console.log(`Request listening to the port number ${port}! http://localhost:8000`)
})


// Url route:
// http://localhost:3000
// http://localhost:3000/about
// http://localhost:3000/contact
// http://localhost:3000/service1
// http://localhost:3000/service2