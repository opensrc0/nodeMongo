var mongoose = require("mongoose");

var connectionUrl = 'mongodb://127.0.0.1:27017/';
var dbName = 'users_test';

var connection = mongoose.connect(connectionUrl+dbName).connection;

connection.on("error", function(error){
	console.log(error);
});

connection.on("connected", function(){
	console.log("Mongose Default connection open to"+connectionUrl);
});

connection.on("disconnected", function(error){
	console.log("Mongose Default connection  Disconnected");
});

process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected through app termination'); 
    	process.exit(0); 
	});
});

// var MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://127.0.0.1:27017/bench", function (err, db) {
// 	if(!err) {
// 		console.log("We are connected");
// 	} else {
// 		console.log(err);
// 		console.log(db);
// 	}
// });