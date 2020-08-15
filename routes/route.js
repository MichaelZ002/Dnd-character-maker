// route.js - this file offers a set of routes for displaying and saving data to the db
var db = require("../models");

// routes

module.exports = function (app) {
    app.get('/api/characters', function (req, res) {
        db.Character.findAll().then(function (results) {
            res.json(results)
        })
    })



};