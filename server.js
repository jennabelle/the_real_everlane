var express = require('express');
var bodyParser = require('body-parser');
var Twitter = require('twitter');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
//var DotEnv = require('dotenv');

//DotEnv.config();

const api_twitter_url = 'https://api.twitter.com/1.1/search/tweets.json';

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// configure express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false, limit: '500mb' }));
app.use(bodyParser.json({ limit: '500mb' }));

// serve static files like index.html, css etc
app.use( express.static( __dirname ) );

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname), 'index.html');
});

app.post('/api/getTweets', function(req, res) {

	var params = { q: req.body.searchQuery + '+everlane', filter: 'media' };

	client.get(api_twitter_url, params, function(error, tweets, resp) {

		if (error) { console.log('error: ', error) }

		if (!error) {
			res.send(tweets);
		}
	});
});

app.listen(PORT, function() {
  console.log('\nProduction Express server running at localhost:' + PORT);
});