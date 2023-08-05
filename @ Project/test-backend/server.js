const express = require('express');
const fs = require("fs")
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());

app.get("/", (req, res) => {
    res.send('<h1>Home</h1>')
})
// Send String as a Response

app.get("/users", (req, res) => {
  fs.readFile("./db.json", "utf-8",  (err, json_data) => {
    console.log("Reading the 'db.json' local file.") // see in server_console.
    const users_json_data = JSON.parse(json_data).user
    res.json(users_json_data)
  })
})
// Send JSON as a Response

app.listen(port, () => {
    console.log(`Listening to the request on server http://localhost:8000`)
})

// when you pass object,array as response, behind the scene express stringify that object into JSON. ==> res.send bs res.json