'use strict'
module.exports = function(args, check) {
  check(args, "not_check_outer_code", "Boolean");
  check(args, "product_id", "Number", true);
  check(args, "sc_item_id", "Number");
  check(args, "sc_item_ids", "String");
  check(args, "sku_ids", "String");
}
