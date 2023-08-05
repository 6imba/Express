const express = require('express')
const router = new express.Router()

//http://localhost:8000 ==> Send object html as a Response
router.get("/", (req, res) => {
    res.send("<h1>Home</h1>") // execute when hit http://localhost:8000 request.
})

//http://localhost:8000/users ==> Send object JSON Data as a Response
router.get("/users", (req, res) => {
    res.json([{ id:1, name: "Amir"},{ id:2, name: "Harry"}]) // execute when hit http://localhost:8000/users request.
})

router.get("/users_1", (req, res) => {
    res.json([{ id:1, name: "Amir"},{ id:2, name: "Harry"}]) // execute when hit http://localhost:8000/users request.
})

router.get("/users_2", (req, res) => {
    res.json([{ id:1, name: "Amir"},{ id:2, name: "Harry"}]) // execute when hit http://localhost:8000/users request.
})

module.exports = router