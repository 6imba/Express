const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors()) // access cross origin

app.get("/", (req, res) => {
    res.send("Hi, I am index page.")
})

app.get("/about", (req, res) => {
    res.send("Hi, I am about page.")
})

app.get("/users", (req, res) => {
    res.send(
        [
            {
                id: 1,
                name: 'Amir',
            },
            {
                id: 2,
                name: 'Hari',
            },
        ]
    )
})

app.listen(8000, "127.0.0.1", (req, res) => {
    console.log("Request listening to the 127.0.0.1 port number 8000!")
})

