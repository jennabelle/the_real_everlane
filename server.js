var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false, limit: '500mb' })); // jenna
app.use(bodyParser.json({ limit: '500mb' })); // jenna

// serve static files like index.html, css etc.
app.use( express.static( __dirname ) );

var PORT = process.env.PORT || 3000;

var server = app.listen(PORT, function() {

  console.log('\nProduction Express server running at localhost:' + PORT);

});
