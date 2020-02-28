
//Express

var express = require("express");

var app = express();
var PORT = process.env.PORT || 8082;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Static Directory

app.use(express.static("./public"));

//Handlebars Stuff

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//Get to Router

 var routes = require("./controllers/burgers_controller.js");
 app.use (routes);


//Start Server

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });