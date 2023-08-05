const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{ // create/initialize Node_http_web_server
    console.log(req.url)
    if(req.url == "/"){ // open browser and goto/try http://localhost:8006/ in url_bar.
        res.end("Hello from HomePage of Node Http Server!")
    }
    else if(req.url == "/about"){ // open browser and goto/try http://localhost:8006/about in url_bar.
        res.end("Hello from AboutPage of Node Http Server!")
    }
    else if(req.url == "/contact"){ // open browser and goto/try http://localhost:8006/contact in url_bar.
        res.end("Hello from ContactPage of Node Http Server!")
    }
    else if(req.url == "/employeeAPI"){ // open browser and goto/try http://localhost:8006/eployeeAPI in url_bar.
        fs.readFile("./employeeAPI.json", "utf-8",  (err, json_data) => {
            console.log("Reading the 'employeeAPI.json' file store in local_file.") // see in server_console.
            // console.log("JSON Data:", json_data) // see in server_console.
            // res.end(`Hello from eployeeAPI hosted by Node Http Server1!`)
            // res.end(`Hello from eployeeAPI hosted by Node Http Server1! ${json_data}`)
            res.end(json_data)
        })
        // res.end("Hello from eployeeAPI hosted by Node Http Server2!")
    }
    else{
        res.end(`Hello from NoPage${req.url} of Node Http Server3!`)
    }
})

server.listen(8006, "127.0.0.1", () => { //Server listening to incomming HTTP-Request  http-request at port_number:8006 & host by local_host:127.0.0.1.(127.0.0.1:8006)
    console.log("Server listening to HTTP-Request at port-number 8006. http://localhost:8006/")
})

// # Try API-URL:
//     - http://localhost:8006/
//     - http://localhost:8006/about
//     - http://localhost:8006/contact
//     - http://localhost:8006/eployeeAPI