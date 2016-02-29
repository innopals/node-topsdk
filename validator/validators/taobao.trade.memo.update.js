'use strict'
module.exports = function(args, check) {
  check(args, "flag", "Number");
  check(args, "memo", "String");
  check(args, "reset", "Boolean");
  check(args, "tid", "Number", true);
}
