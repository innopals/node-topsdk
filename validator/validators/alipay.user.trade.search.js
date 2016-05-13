'use strict'
module.exports = function(args, check) {
  check(args, "alipay_order_no", "String");
  check(args, "end_time", "String", true);
  check(args, "merchant_order_no", "String");
  check(args, "order_from", "String");
  check(args, "order_status", "String");
  check(args, "order_type", "String");
  check(args, "page_no", "String", true);
  check(args, "page_size", "String", true);
  check(args, "start_time", "String", true);
}
