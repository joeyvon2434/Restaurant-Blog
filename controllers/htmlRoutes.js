//File: htmlRoutes.js
//Purpose: This file contains all html routes
//============================================

//Dependencies
//============================================

var path = require('path');


//Routes
//============================================

module.exports = function(app) {

    //send the user the main page
    app.get("/", function (req, res) {
        res.render("index");
    });

    //send the user to the search page
    app.get("/browse", function(req, res) {
        res.render("browsePage");
    });

};//end module.exports

