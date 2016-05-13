'use strict'
module.exports = function(args, check) {
  check(args, "client_info", "String");
  check(args, "sub_user_id", "Number", true);
  check(args, "topics", "String", true);
  check(args, "user_id", "Number", true);
  check(args, "version", "Number");
}
