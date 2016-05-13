'use strict'
module.exports = function(args, check) {
  check(args, "gmt_create_end", "Date");
  check(args, "gmt_create_start", "Date");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "status_code", "String");
  check(args, "trade_id", "Number");
}
