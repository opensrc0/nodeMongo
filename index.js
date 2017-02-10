var express = require("express");
var MongoClient = require('mongodb').MongoClient;

// var mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017/bench", function (err, db) {
	if(!err) {
		console.log("We are connected");
	} else {
		console.log(err);
		console.log(db);
	}
});
// var connection = mongoose.connect('mongodb://127.0.0.1:27017/users_test').connection;
// connection.on("error", function(error){
// 	console.log(error);
// });

var app = express();
var router = express.Router();

router.get("/home", function (req, res) {
	res.send({"message" : "You are in home Page"});
});

router.get("/pap", function (req, res) {
	res.json({"message" : "You are in pap Page"});
});

router.get("/snb", function (req, res) {
	res.json({"message" : "You are in snb Page"});
});

router.get("/vap", function (req, res) {
	res.json({"message" : "You are in vap Page"});
});

router.use("/user/:id",function(req,res,next){
  console.log(req.params.id)
  if(req.params.id == 0) {
    res.json({"message" : "You must pass ID other than 0"});    
  }
  else next();
});

router.get("/user/:id",function(req,res){
  res.json({"message" : "Id is "+req.params.id});
});




app.use("/", router);

app.use("*",function(req,res){
  res.sendFile(__dirname+"/package.json");
});


app.listen(3000,function(){
  console.log("Live at Port 3000");
});
