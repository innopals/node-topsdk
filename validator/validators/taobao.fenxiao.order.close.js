'use strict'
module.exports = function(args, check) {
  check(args, "message", "String", true);
  check(args, "purchase_order_id", "Number", true);
  check(args, "sub_order_ids", "String");
}
