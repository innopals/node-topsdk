'use strict'
module.exports = function(args, check) {
  check(args, "ids", "Number", true);
  check(args, "prices", "String", true);
  check(args, "product_id", "Number", true);
  check(args, "sku_id", "Number");
  check(args, "target_type", "String", true);
  check(args, "trade_type", "String");
}
