'use strict'
module.exports = function(args, check) {
  check(args, "product_id", "Number", true);
  check(args, "sku_ids", "String");
}
