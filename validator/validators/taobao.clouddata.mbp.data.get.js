'use strict'
module.exports = function(args, check) {
  check(args, "parameter", "String");
  check(args, "sql_id", "Number", true);
}
