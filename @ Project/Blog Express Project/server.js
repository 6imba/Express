// Import Modules:
const express = require("express");
const path = require("path");
const engine = require("express-handlebars");

// Conatant Variable:
const server = express()
const port = 3000

// Template engine:
server.engine('handlebars', engine.engine()); //???
server.set('view engine', 'handlebars');
server.set('views', './templates');

// Middleware:
server.use(express.static(path.join(__dirname, "public_static_assets")))
server.use("/", require(path.join(__dirname,"routes/blogRoutes.js")));

// Route|URL|API|Endpoint
// server.get('/', (req, res) => {
//   res.sendFile('Index')
// })


// Bind server with specific host&port  and listen to server request.
server.listen(port, () => {
  console.log(`Example server listening on http://localhost:${port}`)
})