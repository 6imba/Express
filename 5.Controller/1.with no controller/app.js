const express = require('express')

const app = express()
const port = 8010

app.get('/api/user/all', (req,res)=> {
    res.send("user retrieve all api.")
})
app.post('/api/user/create', (req,res)=> {
    res.send("user create a api.")
})
app.patch('/api/user/update/:para', (req,res)=> {
    res.send("user update patch a api.")
})
app.delete('/api/user/delete/:para', (req,res)=> {
    res.send("user delete a api.")
})

app.get('/api/blog/all', (req,res)=> {
    res.send("blog retrieve all api.")
})
app.post('/api/blog/create', (req,res)=> {
    res.send("blog create a api.")
})
app.patch('/api/blog/update/:id', (req,res)=> {
    res.send("blog update patch a api.")
})
app.delete('/api/blog/delete/:para', (req,res)=> {
    res.send("blog delete a api.")
})



app.listen(port, (req,res) => {
    console.log(`Server started at http://localhost:${port}.`)
})

