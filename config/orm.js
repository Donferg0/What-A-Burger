var connection = require("../config/connection.js");

var orm = {
    all: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
          connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
      },

    update: function(table, condition, cb) {
      var queryString = "UPDATE " + table + " SET devoured=true WHERE id=" + condition + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw  err;
          }
          cb(result);
        });
    },
}

module.exports = orm;