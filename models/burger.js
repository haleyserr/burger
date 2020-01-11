// Get the things
var orm = require("../config/orm.js");

// Use ORM

var burger = {
    
    selectAll: function(hs) {
      orm.selectAll("burgers", hs, function(res) {
        cb(res);
      });
    },
    insertOne: function(col, value, hs) {
      orm.insertOne("burgers", col, value, hs, function(res) {
        cb(res);
      });
    },
    updateOne: function(colvalue, id, hs) {
      orm.delete("burgers", "devoured", colvalue, id, hs, function(res) {
        cb(res);
      });
    }
  };



// Export for controller
module.exports = burger;