var express = require('express');
var readdirp = require('readdirp');

var app = express();

app.use(express.static('build'));

//404
app.use(function(req, res, next) {
  res.redirect('/crouton/404');
});

/*
Start the app
*/
var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
  var host = process.env.VCAP_APP_HOST || 'localhost';
  console.log('Crouton started at http://%s:%s', host, port);
});
