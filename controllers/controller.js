var rounds = require('../models/model.js')
var mongoose = require('mongoose');
var db = mongoose.connection;
var scraperjs = require('scraperjs');
var papa = require('papaparse')



// var webdriverio = require('webdriverio');
// var webdriver = require('selenium-webdriver');


var Nightmare = require('nightmare');		



test = function(req, res){

var fakedata =[{TransactionName:"Flowhub's Series A",TransactionNameURL:"https://www.crunchbase.com/funding-round/9eac9b1a2031be66d897114005111ce5",CompanyName:"Flowhub",CompanyNameURL:"https://www.crunchbase.com/organization/flowhub",FundingType:"Series A",MoneyRaised:"$3,250,000",AnnouncedOnDate:"4/12/17",Location:"Denver"},
{TransactionName:"Wurk's Seed Round",TransactionNameURL:"https://www.crunchbase.com/funding-round/f04442e8d711809a74192eee97850012",CompanyName:"Wurk",CompanyNameURL:"https://www.crunchbase.com/organization/wurk",FundingType:"Seed",MoneyRaised:"$2,000,000",AnnouncedOnDate:"4/11/17",Location:"Denver"},
{TransactionName:"CyberGRX's Series B",TransactionNameURL:"https://www.crunchbase.com/funding-round/bf9177bf6fd6e2ca7aafda496b84b9b6",CompanyName:"CyberGRX",CompanyNameURL:"https://www.crunchbase.com/organization/cybergrx",FundingType:"Series B",MoneyRaised:"$20,000,000 ",AnnouncedOnDate:"4/18/17",Location:"Denver"},
{TransactionName:"Turbo Tenant, LLC's Venture Round",TransactionNameURL:"https://www.crunchbase.com/funding-round/1f4e4410bc864ee2ca0bfd7280e8750d",CompanyName:"Turbo Tenant, LLC",CompanyNameURL:"https://www.crunchbase.com/organization/turbo-tenant-llc",FundingType:"Series Unknown",MoneyRaised:"$1,500,000",AnnouncedOnDate:"4/18/17",Location:"Fort Collins"},
{TransactionName:"Sphero's Venture Round",TransactionNameURL:"https://www.crunchbase.com/funding-round/8ec28fc9c982a712ce1bd2465a82c43a",CompanyName:"Sphero",CompanyNameURL:"https://www.crunchbase.com/organization/orbotix",FundingType:"Series Unknown",MoneyRaised:"$23,000,000",AnnouncedOnDate:"4/7/17",Location:"Boulder"},
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


module.exports = {
	test : test,
	test2 : test2,
	CBtest : CBtest,
	csv : csv
}





