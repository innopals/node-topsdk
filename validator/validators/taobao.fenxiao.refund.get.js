'use strict'
module.exports = function(args, check) {
  check(args, "query_seller_refund", "Boolean");
  check(args, "sub_order_id", "Number", true);
}
