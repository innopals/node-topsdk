'use strict'
module.exports = function(args, check) {
  check(args, "end_date", "Date");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_date", "Date");
  check(args, "status", "String");
  check(args, "trade_type", "String");
}
