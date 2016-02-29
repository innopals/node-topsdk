'use strict'
module.exports = function(args, check) {
  check(args, "item_id", "Number", true);
  check(args, "outer_id", "String");
  check(args, "sku_outers", "UpdateSkuOuterId");
}
