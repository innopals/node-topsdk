'use strict'
module.exports = function(args, check) {
  check(args, "end_time", "Date", true);
  check(args, "instance_name", "String", true);
  check(args, "interact_description", "String", true);
  check(args, "lottery_code", "String", true);
  check(args, "start_time", "Date", true);
}
