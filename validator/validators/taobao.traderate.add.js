'use strict'
module.exports = function(args, check) {
  check(args, "anony", "Boolean");
  check(args, "content", "String");
  check(args, "oid", "Number");
  check(args, "result", "String", true);
  check(args, "role", "String", true);
  check(args, "tid", "Number", true);
}
