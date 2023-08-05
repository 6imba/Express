const express = require('express');

const app = express();
const port = 8010

// app.get('/', (req,res)=> {})

// app.get('/path', (req,res)=> {})

// app.get('/path/:id', (req,res)=> {})

// app.post('/path/', (req,res)=> {})

// app.patch('/path/:para', (req,res)=> {})

// app.put('/path/:para', (req,res)=> {})

// app.delete('/path/:para', (req,res)=> {})

// app.all('*', (req,res)=> {})

// app.all('api/*', (req,res)=> {})


app.get('/students/all', (req,res)=> {})

app.post('/students/create', (req,res)=> {})

app.patch('/students/update/:para', (req,res)=> {})

app.put('/students/update/:para', (req,res)=> {})

app.delete('/students/delete/:para', (req,res)=> {})

app.listen(port, () => {
    console.log(`Express server start at http://127.0.0.1:${port}.`)
})

