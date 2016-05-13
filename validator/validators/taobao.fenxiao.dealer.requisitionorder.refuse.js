'use strict'
module.exports = function(args, check) {
  check(args, "dealer_order_id", "Number", true);
  check(args, "reason", "Number", true);
  check(args, "reason_detail", "String", true);
}
