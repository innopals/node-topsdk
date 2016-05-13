'use strict'
module.exports = function(args, check) {
  check(args, "cancel_id", "Number");
  check(args, "first_logistics", "String", true);
  check(args, "first_waybillno", "String", true);
  check(args, "resource_id", "Number", true);
  check(args, "sender_id", "Number");
  check(args, "store_code", "String", true);
  check(args, "trade_order_id", "Number", true);
}
