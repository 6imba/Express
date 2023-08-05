const { urlencoded } = require('body-parser');
const experss = require('express');
const path = require('path')

const app = experss();

// Get data from server http response body.
app.get('/', (req, res) => {
    // res.send("Hello from expres server!");
    // res.send("<h1>Hello from expres server!</h1>");
    // res.send({id: 001, name: "Simba"});
    // res.send() will automatically detect the response type.
    // However there is distinct menthod called res.json() to response json data from server.
    // res.json({id: 001, name: "Simba"});
    // we can also get header value/fields.
    res.send(req.header('host'));
    // res.send(req.header('User-Agent'));
    // res.send(req.rawHeaders);
});

app.use(experss.json());
app.use(experss.urlencoded({ extended: false}));
// Send data to server in the http request body.
app.post('/contact', (req, res) => {
    res.send(req.body);
})
// req.body this wont work for jsondata and form data untill we use .json and  urlencoded middleware
// http://localhost:5000/contact -> POSt method
app.listen(5000, () => console.log(`Server started on 5000`))

// Static files are typically files such as scripts, CSS files, images, etc... that aren't server-generated, but must be sent to the browser when requested. If node. js is your web server, it does not serve any static files by default, you must configure it to serve the static content you want it to serve.
