(function () {
	"use strict";
	var express = require('express'),
		ig = require('instagram-node').instagram();
	var app = express(), port = 8080;

	//ig.use({ access_token:  'access_token' });
	ig.use({ client_id: 'dd64b8a9a7a7409daeb3b263d877e0b1',
			 client_secret: '02c7188c4ffa4ca08ce41afff04e4086' });

	app.use(express.static(__dirname + '/public'));
	app.set('view engine', 'ejs');


	app.get('/', function(req, res) {
		ig.media_popular(function (err, medias, remaining, limit) {
			res.render('pages/index', { grams: medias });
		})
	});

	app.listen(port);
	console.log('Listening @ ' + port)


})();
