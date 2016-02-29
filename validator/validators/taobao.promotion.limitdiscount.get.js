'use strict'
module.exports = function(args, check) {
  check(args, "end_time", "Date");
  check(args, "limit_discount_id", "Number");
  check(args, "page_number", "Number");
  check(args, "start_time", "Date");
  check(args, "status", "String");
}
