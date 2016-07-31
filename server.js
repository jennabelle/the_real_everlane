var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Twitter = require('twitter');
var app = express();
var PORT = process.env.PORT || 3000;
var DotEnv = require('dotenv');

DotEnv.config();

// import express from 'express'
// import bodyParser from 'body-parser'
// import path from 'path'
// import Twitter from 'twitter'

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const api_url = 'https://api.twitter.com/1.1/search/tweets.json';

// configure express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false, limit: '500mb' }));
app.use(bodyParser.json({ limit: '500mb' }));

// serve static files like index.html, css etc
app.use( express.static( __dirname ) );

app.post('/api/getTweets', function(req, res) {

	var params = { q: req.body.searchQuery + '+everlane', filter: 'media' };

	client.get(api_url, params, function(error, tweets, resp) {

		if (error) { console.log('error: ', error) }

		if (!error) {
			res.send(tweets);
		}
	});
});

var server = app.listen(PORT, function() {
  console.log('\nProduction Express server running at localhost:' + PORT);
});
