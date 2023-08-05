const express = require('express');
const app = express();

const port = 8000;

//http://localhost:8000 ==> Send object html as a Response
app.get("/", (req, res) => {
    res.send("<h1>Home</h1>") // execute when hit http://localhost:8000 request.
})

//http://localhost:8000/users ==> Send object JSON Data as a Response
app.get("/users", (req, res) => {
    res.json([{ id:1, name: "Amir"},{ id:2, name: "Harry"}]) // execute when hit http://localhost:8000/users request.
})

app.get("/users_1", (req, res) => {
    res.json([{ id:1, name: "Samir"},{ id:2, name: "Jaam"}]) // execute when hit http://localhost:8000/users_1 request.
})

app.get("/users_2", (req, res) => {
    res.json([{ id:1, name: "Laku"},{ id:2, name: "Kiro"}]) // execute when hit http://localhost:8000/users_2 request.
})

app.listen(port, (req, res) => {
    console.log(`Request listening to the port number ${port}! http://localhost:8000`) // execute when server start.
})

// # Syntax:
//     - app.get(route-url, callback)

