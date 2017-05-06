var rounds = require('../models/model.js')
var mongoose = require('mongoose');
var db = mongoose.connection;
var scraperjs = require('scraperjs');
var papa = require('papaparse')



// var webdriverio = require('webdriverio');
// var webdriver = require('selenium-webdriver');


var Nightmare = require('nightmare');		



test = function(req, res){

var fakedata =[
 {
   TransactionName: "Cerapedics' Debt Financing",
   TransactionNameURL: "https://www.crunchbase.com/funding-round/0964ae7c7f8114c4d7bbd1245fea5eef",
   CompanyName: "Cerapedics",
   CompanyNameURL: "https://www.crunchbase.com/organization/cerapedics",
   FundingType: "Debt Financing",
   MoneyRaised: "$20,000,000 ",
   AnnouncedOnDate: "4/19/17",
   Location: "Westminster"
 }
]


	console.log("test running")
		rounds.create(fakedata, function(err, doc){
		res.send(doc)

	}
)}

test2 = function(req, res){
	// console.log("test 2 running")
	rounds.find({}, function(err, doc){
		// console.log(doc)
		res.send(doc)
	})

}

csv = function(req, res){
console.log(req)
}

// CBtest = function(req, res){
// 	console.log("going to run scraper")
// scraperjs.StaticScraper.create()
// 	.get("https://www.crunchbase.com/app/search/companies/c86bc76c6b9217913c8afc0e45706fb3e911cfa5")
// 	.then(function(_, utils) {
// 		console.log(utils)
// 		utils.stop();
// 		// utils.params.paramName
// 	});
// }


CBtest = function(req, res){
var nightmare = Nightmare({ show: true });
var selector = "document.querySelector('a[href='/jobs']')"
nightmare
  .goto('https://angel.co/login')
  .wait(5000)
  // .insert('#q', 'facebook')
  .type('#user_email', 'ressdana@gmail.com')
  .wait(5000)
  .insert('#user_password', '0okmkjtest')
  .wait(5000)
  .click("a[href='/jobs']")
  .evaluate(function () {
    return document.querySelector('.new_taggings').innerText;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
}


addRound = function(req, res){
        if(req.body.password == '112233'){
        var newRound = [req.body]
        rounds.create(newRound, function(err, doc){
    res.send(doc)
        })
          } else {
            res.send("wrong password")
          }
}


module.exports = {
	test : test,
	test2 : test2,
	CBtest : CBtest,
	csv : csv,
  addRound : addRound
}





