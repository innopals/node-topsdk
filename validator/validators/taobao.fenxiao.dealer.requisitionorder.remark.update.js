'use strict'
module.exports = function(args, check) {
  check(args, "dealer_order_id", "Number", true);
  check(args, "supplier_memo", "String");
  check(args, "supplier_memo_flag", "Number", true);
}
