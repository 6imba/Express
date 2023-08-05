require('dotenv').config();
const express = require('express')

const app = express();
const port = process.env.PORT || 8011;

app.get('/', (req,res) => {
    console.log("Api landing page ...")
    res.send("Api landing page ...")
})

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
})

