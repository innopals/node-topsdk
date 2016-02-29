'use strict'
module.exports = function(args, check) {
  check(args, "error_message", "String");
  check(args, "execute_host", "String");
  check(args, "id", "Number", true);
  check(args, "next_execute_time", "Date", true);
  check(args, "now_sync_time", "Date", true);
  check(args, "params", "String");
  check(args, "status", "Number", true);
  check(args, "target_appkey", "String");
  check(args, "type", "Number");
  check(args, "version", "Number", true);
}
