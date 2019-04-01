var express = require("express");

//Setting express to variable
var app = express();

//Defines the custom port the site will host on
var PORT = process.env.PORT || 3000;

//This is for URL parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//This requires that the specified file paths below exist so the app knows where to search for data.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Code below runs app on server and returns a console.log is connection is successful.
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
