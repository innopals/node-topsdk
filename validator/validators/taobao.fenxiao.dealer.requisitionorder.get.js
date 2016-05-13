'use strict'
module.exports = function(args, check) {
  check(args, "end_date", "Date", true);
  check(args, "fields", "String");
  check(args, "identity", "Number", true);
  check(args, "order_status", "Number");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_date", "Date", true);
}
