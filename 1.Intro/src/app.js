const express = require('express')
const expressServer = express()

const port = 3000
const path = require("path")
const amirMiddleware = (req, res, next) => {
  console.log("Amir Middleware")
  console.log(typeof(req))
  console.log(typeof(res))
  console.log(typeof(next))
  next()
}

expressServer.use(amirMiddleware)
expressServer.use(express.static(path.join(__dirname, "public")))

//http://localhost:3000
expressServer.get('/', (req, res) => {
  res.send('Index')
})

//http://localhost:3000/about/
expressServer.get('/about', (req, res) => {
    res.json({"name":"Amir Shrestha"})
  })

//http://localhost:3000/greet/Amir
expressServer.get("/greet/:nameIdentifier", (req, res) => {
  res.send("Hello " + req.params.nameIdentifier)
})

//http://localhost:3000/complet_html_file
expressServer.get('/complet_html_file', (req, res) => {
  res.sendFile(path.join(__dirname ,'../', "index.html"))
})

expressServer.listen(port, () => {
  console.log(`Example expressServer listening on http://localhost:${port}`)
})