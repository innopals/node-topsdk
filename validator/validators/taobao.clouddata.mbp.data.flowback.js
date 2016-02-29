'use strict'
module.exports = function(args, check) {
  check(args, "data", "String", true);
  check(args, "table_name", "String", true);
}
