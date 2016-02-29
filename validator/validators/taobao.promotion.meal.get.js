'use strict'
module.exports = function(args, check) {
  check(args, "meal_id", "Number");
  check(args, "status", "String");
}
