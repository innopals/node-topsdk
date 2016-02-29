'use strict'
module.exports = function(args, check) {
  check(args, "flag", "Number");
  check(args, "memo", "String", true);
  check(args, "tid", "Number", true);
}
