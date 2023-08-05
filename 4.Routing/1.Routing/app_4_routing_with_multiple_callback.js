const express = require('express');
const app = express();

const port = 8000;

// # 1:
// app.get("/multiple_callback",
//     (req, res) => {
//         console.log("first callback") // execute when hit http://localhost:8000 request.
//     }, 
//     (req, res) => {
//         console.log("second callback") // execute when hit http://localhost:8000 request.
//     }, 
//     (req, res) => {
//         console.log("third callback") // execute when hit http://localhost:8000 request.
//         res.send("<h1>Home</h1>") // execute when hit http://localhost:8000 request.
//     }, 
// )



// # 2:
// app.get("/multiple_callback",
//     (req, res, next) => {
//         console.log("first callback") // execute when hit http://localhost:8000 request.
//         next()
//     }, 
//     (req, res, next) => {
//         console.log("second callback") // execute when hit http://localhost:8000 request.
//         next()
//     }, 
//     (req, res) => {
//         console.log("third callback") // execute when hit http://localhost:8000 request.
//         res.send("<h1>Home</h1>") // execute when hit http://localhost:8000 request.
//     }, 
// )



// # 3:
const m_1= (req, res, next) => {
    console.log("first callback") // execute when hit http://localhost:8000 request.
    next()
}
const m_2 = (req, res, next) => {
    console.log("second callback") // execute when hit http://localhost:8000 request.
    next()
}

// app.get("/multiple_callback", m_1, m_2, (req, res) => {
//     console.log("third callback") // execute when hit http://localhost:8000 request.
//     res.send("<h1>Home</h1>") // execute when hit http://localhost:8000 request.
// })

app.get("/multiple_callback", [m_1, m_2], (req, res) => {
    console.log("third callback") // execute when hit http://localhost:8000 request.
    res.send("<h1>Home</h1>") // execute when hit http://localhost:8000 request.
})

app.listen(port, (req, res) => {
    console.log(`Request listening to the port number ${port}! http://localhost:8000`) // execute when server start.
})

// # Syntax:
    // - app.get(route-url, callback_1,callback_2,callback_3,....)
    // - its callback chaining
    //  - so we called in-between callback as middleware
    


