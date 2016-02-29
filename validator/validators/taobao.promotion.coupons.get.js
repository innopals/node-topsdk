'use strict'
module.exports = function(args, check) {
  check(args, "coupon_id", "Number");
  check(args, "denominations", "Number");
  check(args, "end_time", "Date");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
}
