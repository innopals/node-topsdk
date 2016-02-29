'use strict'
module.exports = function(args, check) {
  check(args, "end_modified", "Date", true);
  check(args, "start_modified", "Date", true);
  check(args, "sync_type", "String", true);
  check(args, "user_nick", "String");
}
