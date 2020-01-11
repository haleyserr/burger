// Get the things

var burger = require("../models/burger.js");
var express = require("express");


// Make some routes

var router = express.Router();


// View all burgers

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


// Add a Burger
// I set the devoured default to false so that I didn't have to deal with it but now idk.

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {

        res.json({
            id: result.insertId
        });
    });
});


// Update a Burger

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne({
            devoured: req.body.devoured
        },
        id,
        function (result) {

            res.status(200).end();
        }
    );
});




//Export router

module.exports = router;