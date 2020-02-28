
//Express

var express = require("express");

var app = express();
var PORT = process.env.PORT || 8082;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Static Directory

app.use(express.static("./public"));


//Get to Router

require("./controllers/burgers_controller.js");


//Start Server

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });