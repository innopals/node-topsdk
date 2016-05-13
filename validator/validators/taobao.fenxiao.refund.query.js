'use strict'
module.exports = function(args, check) {
  check(args, "end_date", "Date", true);
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "query_seller_refund", "Boolean");
  check(args, "start_date", "Date", true);
}
