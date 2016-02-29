'use strict'
module.exports = function(args, check) {
  check(args, "nick", "String", true);
  check(args, "user_platform", "String");
}
