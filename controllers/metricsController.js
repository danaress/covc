var rounds = require('../models/model.js')
var mongoose = require('mongoose');
var db = mongoose.connection;



getinfo = function(req, res){
	console.log("get info")
	rounds.find({}, function(err, doc){
		res.send(doc)
	})
}


module.exports = {
	getinfo : getinfo
}