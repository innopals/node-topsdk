'use strict'
module.exports = function(args, check) {
  check(args, "exclude_area", "String");
  check(args, "grade", "Number", true);
  check(args, "point", "Number");
  check(args, "postage", "Boolean");
}
