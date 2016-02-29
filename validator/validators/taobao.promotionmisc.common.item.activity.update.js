'use strict'
module.exports = function(args, check) {
  check(args, "activity_id", "Number", true);
  check(args, "description", "String", true);
  check(args, "end_time", "Date", true);
  check(args, "name", "String", true);
  check(args, "start_time", "Date", true);
}
