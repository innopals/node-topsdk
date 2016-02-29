'use strict'
module.exports = function(args, check) {
  check(args, "description", "String");
  check(args, "name", "String", true);
  check(args, "nick", "String", true);
  check(args, "permission_codes", "String");
}
