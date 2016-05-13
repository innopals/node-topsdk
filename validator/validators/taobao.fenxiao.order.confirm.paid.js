'use strict'
module.exports = function(args, check) {
  check(args, "confirm_remark", "String");
  check(args, "purchase_order_id", "Number", true);
}
