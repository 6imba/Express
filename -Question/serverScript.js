const express = require("express")
const server = express()

server.get('/', (req, res) => {
  res.send('Index')
})

server.listen("3001", () => {
    console.log("Server listening on http://localhost:3001")
})