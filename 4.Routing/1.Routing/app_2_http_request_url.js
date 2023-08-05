const express = require('express');

const app = express();
const port = 8010

// http://127.0.0.1:8010/
app.get('/', (req,res)=> {
    res.send('Landing page!')
})

// http://127.0.0.1:8010/api/courses
app.get('/api/courses', (req,res)=> {
    res.json([1,2,3,4,5,6,7,8,9])
})

// http://127.0.0.1:8010/api/course/1 : http request with one url parameter
app.get('/api/course/:id', (req,res)=> {
    res.send(req.params) //object
    // res.send(req.params.id)
})

// http://127.0.0.1:8010/api/course/1999/10 : http request with multiple url parameter
app.get('/api/course/:year/:month', (req,res)=> {
    res.send(req.params)
    // res.send(req.params.year)
    // res.send(req.params.month)
})

// http://127.0.0.1:8010/api/course/1999/10/23?sortBy=name : http request with url query
app.get('/api/course/:year/:month/:date', (req,res)=> {
    res.send(req.query)
})

// http://127.0.0.1:8010/api/course/1999/and/10 : http request with multiple url parameter
app.get('/api/course/:year/and/:month', (req,res)=> {
    res.send(req.params)
    // res.send(req.params.year)
    // res.send(req.params.month)
})

// http://127.0.0.1:8010/api/course/1999-2080 : http request with multiple url parameter
app.get('/api/course/:from-:to', (req,res)=> {
    res.send(req.params)
    // res.send(req.params.from)
    // res.send(req.params.to)
})

// http://127.0.0.1:8010/api/course/:1.:3 : http request with multiple url parameter
app.get('/api/course/:chapter.:page', (req,res)=> {
    res.send(req.params)
    // res.send(req.params.chapter)
    // res.send(req.params.page)
})

// http://127.0.0.1:8010/api/course/:1.:3 : http request with multiple url parameter
app.get('/api/course/:chapter.:page', (req,res)=> {
    const {chapter,page} = req.params
    console.log(chapter,page)
})

// # Regular expression:
// http://127.0.0.1:8010/api/course/1
app.delete('/api/course/:id([0-9]{2})', (req,res)=> {
    const {chapter,page} = req.params
    console.log(chapter,page)
})

// here id,year,month is url-parameter-properties.
// here  is url-parameter-query-string.

app.listen(port, () => {
    console.log(`Express server start at http://127.0.0.1:${port}.`)
})

