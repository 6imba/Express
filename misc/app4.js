const express = require('express');
const app = express();
const port = 3000;
const obj1 = { id:1, name: "Amir"};

app.get("/", (req, res) => {
    res.send(obj1)
})
// Send object JSON Data as a Response

app.get("/about", (req, res) => {
    res.send({
        id: 2,
        title: "About"
    })
})
// Send object JSON Data as a Response

app.get("/contact1", (req, res) => {
    res.send([1,2,3,4,5,6,7])
})
// Send array JSON Data as a Response

app.get("/contact2", (req, res) => {
    res.send([
        {
            id: 1,
            user: 'logger1'
        },
        {
            id: 2,
            user: 'logger2'
        },
        {
            id: 3,
            user: 'logger3'
        },
    ])
})
// Send array JSON Data as a Response

app.get("/service", (req, res) => {
    res.json([1,2,3,4,5,6,7,8])
})
// Send array JSON Data as a Response

app.listen(port, (req, res) => {
    console.log(`Request listening to the port number ${port}!`)
})

// when you pass onbject, array as response, behind the scene express stringify that object into JSON.
// res.send bs res.json