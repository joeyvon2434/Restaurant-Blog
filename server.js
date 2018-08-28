//File: server.js
//Purpose: This file is the starting point for the Node/Express server
//
//***********************************************/

//Dependencies
//================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//set up express app
//================================================
var app = express();
var PORT = process.env.PORT || 8080;


//Set up express to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));

//parse applicaiton/json
app.use(bodyParser.json());

//set up handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


//Set up static directory 
app.use(express.static("public"));

//add in database dependency for models
var db = require("./models");



//Routes
//requires the file with the route, and passes in the express app
//==================================================
//insert routes here################################
require("./controllers/siteUser.js")(app);
require("./controllers/htmlRoutes.js")(app);


//Sync the sequelize models and have express begin listenint to the proper port
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("Restaurant blog app listening on PORT " + PORT);
    });
});


