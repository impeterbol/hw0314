// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  findByIdandUpdate: function (id, objColVals, cb) {
    var condition = "id = " + id;
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;

if(2 == "2"){

}

function isEqual(a, b){
  if(typeof a === typeof b){
    return a === b
  }
  else if(typeof a === "string" && typeof b === "number"){
    if(a.includes(".")){
      return parseFloat(a) === b
    } else {
      return parseInt(a) === b
    }
  }
  else if(typeof a === "string" && typeof b === "number"){
    if(a.includes(".")){
      return parseFloat(a) === b
    } else {
      return parseInt(a) === b
    }
  }
}
