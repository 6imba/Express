const express = require('express')
const session = require('express-session')
const server = express()

server.set("view engine", "hbs")

server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 }
  }))

// server.get('/', (req, res) => {
//     console.log("Hi")
//     req.session.testVar ? req.session.testVar++ : req.session.testVar=1;
//     console.log(req.session.testVar);
//     res.send(`${req.session.testVar}`);
// })

server.get('/', (req, res) => {
    console.log("Hi")
    req.session.testVar ? req.session.testVar++ : req.session.testVar=1;
    res.render("index", {testVar: req.session.testVar});
})
server.get('/o', (req, res) => {
    res.render("index", {testVar: req.session.testVar});
})

server.listen(3005)