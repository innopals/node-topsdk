'use strict'
module.exports = function(args, check) {
  check(args, "item_id", "Number", true);
  check(args, "item_price", "Price");
  check(args, "options", "UpdateItemPriceOption");
  check(args, "sku_prices", "UpdateSkuPrice");
}
