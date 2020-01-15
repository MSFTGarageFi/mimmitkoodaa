// lets require express, so we can use it in this page
var express = require('express');

// create a new instance of express
var app = express();

var bodyParser = require('body-parser');
var fetch = require('node-fetch');

// tell express to use bodyparser and JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    // update the root request to send the index.html file back as our home page
    response.sendFile('public/index.html');
});

app.route('/post').post(function (request, response) {
    var searchTerm = request.body.searchText;

  // fetch the JSON from Linked Events API in JSON and use our search term for the text parameter
  fetch('https://api.hel.fi/linkedevents/v1/event/?format=json&text='+searchTerm)
    .then(helResponse => helResponse.json()) // parse the response as JSON
    .then(eventData => { // take the parsed JSON as eventData and
      console.log(eventData.data) // Print all the JSON to our console for debugging
      response.render('results', {searchTerm: searchTerm, events: eventData.data});
    })
    .catch(error => console.error(error)); // in case of error print it to our commandline
});

// tell express that we will use port 3000 for this webserver
app.listen(3000);