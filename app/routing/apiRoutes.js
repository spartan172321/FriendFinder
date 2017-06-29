// links the routes to the data source (friends.js)
// var holds the arrays of info the users input into the survey

var friendData = require("../data/friends");


//ROUTING

module.exports = function(app){
	// code below allows user to visit the api info page
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});


	// API POST
	// below code handles when the user submits the survey and the data goes to the server. The data is in the form of a JSON object and pushed into an array

	app.post("/api/friends", function(req, res){
		console.log(req.body)
		friendData.push(req.body);
		res.json(true);
	});
}