'use strict'
module.exports = function(args, check) {
  check(args, "purchase_order_id", "Number", true);
  check(args, "supplier_memo", "String", true);
  check(args, "supplier_memo_flag", "Number");
}
