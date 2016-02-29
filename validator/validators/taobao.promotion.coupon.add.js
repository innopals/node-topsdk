'use strict'
module.exports = function(args, check) {
  check(args, "condition", "Number");
  check(args, "denominations", "Number", true);
  check(args, "end_time", "Date", true);
  check(args, "start_time", "Date");
}
