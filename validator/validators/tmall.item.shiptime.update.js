'use strict'
module.exports = function(args, check) {
  check(args, "item_id", "Number", true);
  check(args, "option", "UpdateItemShipTimeOption", true);
  check(args, "ship_time", "String");
  check(args, "sku_ship_times", "UpdateSkuShipTime");
}
