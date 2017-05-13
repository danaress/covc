// Requires \\
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('underscore');
var papa = require('papaparse')
var numeral = require('numeral');

var scraperjs = require('scraperjs');





app.use(express.static(__dirname + '/public'));

// Body Parser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var controller = require("./controllers/controller.js");
var metrics = require("./controllers/metricsController.js");
var newcontroller = require("./controllers/controller.js");



// Database
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/users', function(err){
	if (err) console.log(err)
		console.log("connected to mongo")
})
var db = mongoose.connection;
var rounds = require('./models/model.js')


app.post('/test', controller.test);
app.post('/test2', controller.test2);
app.post('/CBtest', controller.CBtest);
app.post('/csv', controller.csv);
app.post('/getinfo', metrics.getinfo);
app.post('/addRound', controller.addRound);
app.post('/deleteRound', controller.deleteRound);






// app.get('/metrics', function(req, res) {
// 	res.sendFile('/metrics.html', {root : './public'});
// });

app.get('/edit', function(req, res) {
	res.sendFile('/edit.html', {root : './public'});
});



app.get('/', function(req, res) {
	res.sendFile('/index.html', {root : './public'});
});

// Creating Server and Listening for Connections \\
var port = 3030
app.listen(port, function(){
  console.log('*** Server running on port ' + port + " ***");

})