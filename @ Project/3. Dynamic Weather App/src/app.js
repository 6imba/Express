const express = require('express');
const hbs = require('hbs')
const path = require('path')
const app = express()
const port = process.env.PORT || '3000'
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const weatherController = require("../controller/weatherController.js");
require("dotenv").config({ path: './.env' })

// set view engine
app.set('views', viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

// mention hbs template engine route
app.get("/", (req, res) => {
    res.render('index')
});

app.get("/weather", weatherController);

app.get("*", (req, res) => {
    res.render('index')
});


app.listen(port, (req, res) => {
    console.log(`Server listening at http://localhost:${port}`)
})

