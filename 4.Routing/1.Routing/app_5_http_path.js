const express = require('express');

const app = express();
const port = 8010

app.get('/about', (req,res)=> {}) // string path
app.get('/ab?cd', (req,res)=> {}) // string pattern path
app.get(/a/, (req,res)=> {}) // regular expression path
app.get(/a/, mw1, mw2, mw3, (req,res)=> {}) // regular expression path
app.get(/a/, [mw1, mw2, mw3], (req,res)=> {}) // regular expression path

app.listen(port, () => {
    console.log(`Express server start at http://127.0.0.1:${port}.`)
})

