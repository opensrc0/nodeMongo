var express = require("express");

require('./backEnd/mongoConnect.js');



var app = express();
var router = express.Router();

router.get("/login", function (req, res) {
	// res.sendFile(__dirname + "/js/login.js");
	// res.send({"message" : "You are in Login Page"});
	res.render('login', { title: 'Hello, World!' });
});

router.get("/logout", function (req, res) {
	res.send({"message" : "You are in logout Page"});
});

router.get("/register", function (req, res) {
	res.send({"message" : "You are in register Page"});
});

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
