const express = require('express')
const router = express.Router()

router.get('/all', (req,res)=> {res.send("blog retrieve all api.")})
router.post('/create', (req,res)=> {res.send("blog create a api.")})
router.patch('/update/:id', (req,res)=> {res.send("blog update patch a api.")})
router.delete('/delete/:para', (req,res)=> {res.send("blog delete a api.")})

module.exports = router

// no need to give different path to all different api routes.
// we can hit api on the basis of methods,parameter rather than path name.