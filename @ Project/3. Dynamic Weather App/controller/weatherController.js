const requests= require('requests')
const weatherController = (req, res) => {
    let dataArray = [];
    requests(`https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&units=mertics&appid=${process.env.WEATHER_API_KEY}`)
        .on('data', (chunk) => {
            const dataObj = JSON.parse(chunk);
            // console.log(dataObj.main.temp)
            dataArray = [ ...dataArray, dataObj.name, dataObj.sys.country, dataObj.weather[0].main, dataObj.main.temp, dataObj.main.temp_min, dataObj.main.temp_max]
            // dataArray = [1,2,34,5]
            // console.log(dataArray instanceof Array)
            console.log(dataArray, "hihi")
        })
        .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
            console.log('end');
        });
    // console.log(dataArray instanceof Array)
    // console.log(dataArray.length)
    console.log(dataArray)
    res.render("weather", {tempData:dataArray})
}
module.exports = weatherController;

//         import express from 'express'
// const app = express()
// const port = process.env.PORT || '3000'
// import fs from 'fs'
// import requests from 'requests'
// import dotenv from 'dotenv'
// dotenv.config({ path: './.env' })

// const htmlFile = fs.readFileSync("index.html", "utf-8");

// const replaceVal = (fileHTML, dataObj1) => {
//     console.log(dataObj1.sys.country)
//     let newHtmlTextFile = fileHTML.replace("{%temp%}", dataObj1.main.temp)
//     newHtmlTextFile = newHtmlTextFile.replace("{%minTemp%}", dataObj1.main.temp_min)
//     newHtmlTextFile = newHtmlTextFile.replace("{%maxTemp%}", dataObj1.main.temp_max)
//     newHtmlTextFile = newHtmlTextFile.replace("{%location%}", dataObj1.name)
//     newHtmlTextFile = newHtmlTextFile.replace("{%country%}", dataObj1.sys.country)
//     newHtmlTextFile = newHtmlTextFile.replace("{%weather%}", dataObj1.weather[0].main)
//     console.log(newHtmlTextFile)
//     return newHtmlTextFile;
// }



