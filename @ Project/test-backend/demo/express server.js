const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;
const obj1 = [{ id:1, name: "Amir"},{ id:2, name: "Harry"}];

app.use(cors());

app.get("/", (req, res) => {
    res.send('<h1>Home</h1>')
})
// Send object JSON Data as a Response

app.get("/users", (req, res) => {
    res.json(
        {
            "user": [
              {
                "id": 1,
                "name": "Amir Shrestha",
                "email": "simbaamir55@gmail.com",
                "password": "123amir",
                "address": "Kapan",
                "gender": "male"
              },
              {
                "id": 3,
                "name": "Resa Gurung",
                "email": "resa26@gmail.com",
                "password": "123resa",
                "address": "Golfhutar",
                "gender": "female"
              },
              {
                "name": "Resa Gurung",
                "email": "resa26@gmail.com",
                "password": "123resa",
                "address": "Golfhutar",
                "gender": "female",
                "id": 4
              },
              {
                "name": "Harriet Foley",
                "email": "jipukaf@mailinator.com",
                "password": "Pa$$w0rd!",
                "address": "Non cupiditate elige",
                "gender": "female",
                "id": 5
              },
              {
                "name": "Lenore Medina",
                "email": "vyxug@mailinator.com",
                "password": "Pa$$w0rd!",
                "address": "Quia tempore accusa",
                "gender": "male",
                "id": 6
              }
            ],
            "comments": [
              {
                "id": 1,
                "body": "some comment",
                "postId": 1
              }
            ],
            "profile": {
              "name": "typicode"
            }
          }
    )
})

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
    console.log(`Listening to the request on server http://localhost:8000`)
})

// when you pass onbject, array as response, behind the scene express stringify that object into JSON.
// res.send bs res.json