const express = require('express');
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = 3007;
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


// set view engine
app.set('views', viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// mention hbs template engine route
app.get("/", (req, res) => {
    res.render('index', {id:101018})
});

app.use(express.static(staticPath));

app.listen(port, (req, res) => {
    console.log(`Request listening to the port number ${port}!`)
});


// Url route:
// http://localhost:3000
// http://localhost:3000/about
// http://localhost:3000/contact