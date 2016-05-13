'use strict'
module.exports = function(args, check) {
  check(args, "is_return_goods", "Boolean", true);
  check(args, "refund_desc", "String", true);
  check(args, "refund_reason_id", "Number", true);
  check(args, "return_fee", "Number", true);
  check(args, "sub_order_id", "Number", true);
}
