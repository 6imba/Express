import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import fs from 'fs'
import requests from 'requests'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const htmlFile = fs.readFileSync("index.html", "utf-8");

const replaceVal = (fileHTML, dataObj1) => {
    console.log(dataObj1.sys.country)
    let newHtmlTextFile = fileHTML.replace("{%temp%}", dataObj1.main.temp)
    newHtmlTextFile = newHtmlTextFile.replace("{%minTemp%}", dataObj1.main.temp_min)
    newHtmlTextFile = newHtmlTextFile.replace("{%maxTemp%}", dataObj1.main.temp_max)
    newHtmlTextFile = newHtmlTextFile.replace("{%location%}", dataObj1.name)
    newHtmlTextFile = newHtmlTextFile.replace("{%country%}", dataObj1.sys.country)
    newHtmlTextFile = newHtmlTextFile.replace("{%weather%}", dataObj1.weather[0].main)
    console.log(newHtmlTextFile)
    return newHtmlTextFile;
}

app.get("/", (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=mertics&appid=${process.env.WEATHER_API_KEY}`)
        .on('data', (chunk) => {
            // console.log(chunk)
            const dataObj = JSON.parse(chunk);
            const dataArr = [dataObj];
            const realTimeData = dataArr.map(dataObj1 => replaceVal(htmlFile, dataObj1)).join("")
            res.write(realTimeData);
        })
        .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
            console.log('end');
        });
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})