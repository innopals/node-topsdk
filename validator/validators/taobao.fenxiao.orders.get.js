'use strict'
module.exports = function(args, check) {
  check(args, "end_created", "Date");
  check(args, "fields", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "purchase_order_id", "Number");
  check(args, "start_created", "Date");
  check(args, "status", "String");
  check(args, "tc_order_id", "Number");
  check(args, "time_type", "String");
}
