'use strict'
module.exports = function(args, check) {
  check(args, "history_days", "Number");
  check(args, "host_ip", "String");
  check(args, "host_name", "String");
  check(args, "rds_name", "String");
  check(args, "topics", "String");
}
