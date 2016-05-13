'use strict'
module.exports = function(args, check) {
  check(args, "dealer_order_id", "Number", true);
  check(args, "delete_detail_ids", "Number");
  check(args, "detail_id_prices", "String");
  check(args, "detail_id_quantities", "String");
  check(args, "new_post_fee", "Number");
}
