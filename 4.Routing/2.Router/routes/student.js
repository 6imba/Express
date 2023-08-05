const express = require('express')
const router = express.Router()

router.get('/all', (req,res)=> {res.send("student retrieve all api.")})
router.post('/create', (req,res)=> {res.send("student create a api.")})
router.patch('/update/:para', (req,res)=> {res.send("student update patch a api.")})
router.put('/update/:para', (req,res)=> {res.send("student update put a api.")})
router.delete('/delete/:para', (req,res)=> {res.send("student delete a api.")})

module.exports = router

// no need to give different path to all different api routes.
// we can hit api on the basis of methods,parameter rather than path name.