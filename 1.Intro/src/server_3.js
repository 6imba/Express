const express = require('express')
const expressServer = express()

const port = 3000
const path = require("path")
const amirMiddleware = (req, res, next) => {
  console.log("Amir Middleware")
  console.log(typeof(req))
  console.log(typeof(res))
  console.log(typeof(next))
  // next()
}

expressServer.use(amirMiddleware)
expressServer.use(express.static(path.join(__dirname, "public")))

expressServer.get('/', (req, res) => {
  res.send('Index')
})

expressServer.listen(port, () => {
  console.log(`Example expressServer listening on http://localhost:${port}`)
})