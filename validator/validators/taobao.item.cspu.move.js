'use strict'
module.exports = function(args, check) {
  check(args, "item_id", "Number", true);
  check(args, "sku_cspu_mapping", "String");
  check(args, "sku_mealproperty_mapping", "String");
  check(args, "spu_id", "Number");
}
