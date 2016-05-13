'use strict'
module.exports = function(args, check) {
  check(args, "end_modified_time", "Date", true);
  check(args, "order_type", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_modified_time", "Date", true);
}
