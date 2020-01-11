// Get mysql
var connection = require("../config/connection.js");

// Helper Functions so we write valid sql
//Didn't end up using

//function printQuestionMarks(num) {
   // var arr = [];
   // for (var i = 0; i < num; i++) {
        //arr.push("?");
    //}
    //return arr.toString();
//}


//function objToSql(ob) {

    //var arr = [];

    //for (var key in ob) {
        //var value = ob[key];
        //if (Object.hasOwnProperty.call(ob, key)) {

            //if (typeof value === "string" && value.indexOf(" ") >= 0) {
                //value = "'" + value + "'";
            //}
           // arr.push(key + "=" + value);
        //}
    //}
    //return arr.toString();
//}



// orm Object 

var orm = {
    // Burger Methods

    // `selectAll()`
    // SELECT * from burgers;
    
    selectAll: function(table, hs){
        
        var queryString = "SELECT * FROM " + table + ";"
        console.log(queryString);
        
        connection.query(queryString, function(err, res){
            if (err){
                throw err;
            }
            hs(result);
        
        });
    },

    // `insertOne()`
    // INSERT INTO burgers (burger_name) VALUES ("blah blah blah");
    //Can only do 1 at time so dont need fancy helper function

    insertOne: function(table, col, value, hs){
        
        var queryString = "INSERT INTO " + table + " (" + col + ") VALUES (" + value + ");"
        console.log(queryString);
        
        connection.query(queryString, function(err, res){
            if (err){
                throw err;
            }
            hs(result);
        
        });
    },

    // `updateOne()`
    // UPDATE burgers SET devoured = true/false WHERE id = #;
    // So... Need to have logic for true/false change and have id on burger object
    // I know I left id hard coded but I would hope ID would be stable field and only 1 instance would need to be updated if schema change
    

    UpdateOne: function(table, col, colvalue, id, hs){
        
        var queryString = "UPDATE " + table + " SET " + col + " = " + colvalue + " WHERE  id=" + id + ";"
        console.log(queryString);
        
        connection.query(queryString, function(err, res){
            if (err){
                throw err;
            }
            hs(result);
        
        });
    },


};



// Export for burger.js
module.exports = orm;