'use strict'
module.exports = function(args, check) {
  check(args, "amount", "Number");
  check(args, "count", "Number");
  check(args, "discount", "Number", true);
  check(args, "grade", "Number", true);
  check(args, "hierarchy", "Boolean", true);
}
