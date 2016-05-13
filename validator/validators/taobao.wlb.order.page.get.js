'use strict'
module.exports = function(args, check) {
  check(args, "end_time", "Date");
  check(args, "order_code", "String");
  check(args, "order_status", "Number");
  check(args, "order_sub_type", "String");
  check(args, "order_type", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_time", "Date");
}
