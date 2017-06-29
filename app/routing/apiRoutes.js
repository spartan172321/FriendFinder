// links the routes to the data source (friends.js)
// var holds the arrays of info the users input into the survey

var friendData = require("../data/friends");
var fs = require('fs');


//ROUTING

module.exports = function(app){
	// code below allows user to visit the api info page

	app.get("/api/friends", function(req, res){
		console.log(friendData);
		res.json(friendData);
	});


	// API POST
	// below code handles when the user submits the survey and the data goes to the server. The data is in the form of a JSON object and pushed into an array

	app.post("/api/friends", function(req, res){
		var scoreArr = req.body.scores;
    var scoreNums = [];
    for(var i in scoreArr){
      scoreNums.push(parseInt(scoreArr[i]));
    }
    var userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: scoreNums
    }
		friendData.push(userData);

		// for (var i in friendData){

		// }


		res.json(friendData[0]);
	});
}