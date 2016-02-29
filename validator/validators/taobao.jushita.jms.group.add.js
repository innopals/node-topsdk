'use strict'
module.exports = function(args, check) {
  check(args, "group_name", "String", true);
  check(args, "user_nicks", "String", true);
  check(args, "user_platform", "String");
}
