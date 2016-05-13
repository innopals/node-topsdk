'use strict'
module.exports = function(args, check) {
  check(args, "grade_id", "Number", true);
  check(args, "name", "String", true);
}
