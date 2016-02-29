'use strict'
module.exports = function(args, check) {
  check(args, "end_date", "Date", true);
  check(args, "service_staff_id", "String", true);
  check(args, "start_date", "Date", true);
}
