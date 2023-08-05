const express = require('express')
const expressServer = express()

const port = 3000

const path = require("path")

console.log(path.join(__dirname, "public"))
expressServer.use(express.static(path.join(__dirname, "public")))

expressServer.get('/', (req, res) => {
  res.send('Index')
})

expressServer.listen(port, () => {
  console.log(`Example expressServer listening on http://localhost:${port}`)
})