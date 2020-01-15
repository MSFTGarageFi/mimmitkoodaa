// lets require express, so we can use it in this page
var express = require('express');

// create a new instance of express
var app = express();

app.use(express.static('public'));


app.get('/', function (request, response) {
    // update the root request to send the index.html file back as our home page
    response.sendFile('public/index.html');
});

// tell express that we will use port 3000 for this webserver
app.listen(3000);