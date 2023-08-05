const express = require('express');
const app = express();

const port = 8000;

app.get('/student/all', (req,res)=> {})
app.post('/student/create', (req,res)=> {})
app.patch('/student/update/:para', (req,res)=> {})
app.put('/student/update/:para', (req,res)=> {})
app.delete('/student/delete/:para', (req,res)=> {})

app.get('/user/all', (req,res)=> {})
app.post('/user/create', (req,res)=> {})
app.patch('/user/update/:para', (req,res)=> {})
app.put('/user/update/:para', (req,res)=> {})
app.delete('/user/delete/:para', (req,res)=> {})

app.get('/post/all', (req,res)=> {})
app.post('/post/create', (req,res)=> {})
app.patch('/post/update/:para', (req,res)=> {})
app.put('/post/update/:para', (req,res)=> {})
app.delete('/post/delete/:para', (req,res)=> {})

app.listen(port, (req, res) => {
    console.log(`Request listening to the port number ${port}! http://localhost:8000`) // execute when server start.
})

// defining all route of all apis in same page makes code look bulk and messy.
// like right now we have student_api,user_api,post_api, we can further have other api so on.
// So make separate file for routing.
// Therefore we use router.

