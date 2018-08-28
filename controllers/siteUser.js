//File: siteUser.js
//Purpose: This file contains all of the routes the users will need to navigate the site, and the code to properly validate and modidy user input to communicate with the sequelize ORM.
//======================================================

//Dependencies
//======================================================

//Require the models folder
var db = require("../models");

//Routes
//======================================================

module.exports = function (app) {

    //GET route for getting all of the reviews from the database
    app.get("/api/reviews", function(req,res) {

        db.Review.findAll({}).then(function(dbReview) {
            res.render("searchResults", dbReview);
        });

    });//end route to get all reviews


    //GET route for geting a single review
    app.get("/api/reviews/:id", function(req, res) {
        
        db.Review.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbReview) {
            res.render("review", dbReview);
        });
    });//end route to get a single review


    //GET route for top choices
    app.get("/api/reviews/topchoices", function(req, res) {
        db.Review.findAll({
            where: {
                topChoice: true
            }
        }).then(function(dbReview) {
            res.render("topChoices", dbReview);
        });
    });//end route for the top choices


}; //end module exports for routes

