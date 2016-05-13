'use strict'
module.exports = function(args, check) {
  check(args, "code", "String", true);
  check(args, "uuid", "String");
}
