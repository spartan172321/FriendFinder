var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// The below maps out our routes when user visits or requests data from different URLS.
var apiRoutes = require("./app/routing/apiRoutes");
apiRoutes(app);

var htmlRoutes = require("./app/routing/htmlRoutes");
htmlRoutes(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

