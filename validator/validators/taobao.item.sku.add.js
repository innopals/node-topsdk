'use strict'
module.exports = function(args, check) {
  check(args, "ignorewarning", "String");
  check(args, "item_price", "Price");
  check(args, "lang", "String");
  check(args, "num_iid", "Number", true);
  check(args, "outer_id", "String");
  check(args, "price", "Price", true);
  check(args, "properties", "String", true);
  check(args, "quantity", "Number", true);
  check(args, "sku_hd_height", "String");
  check(args, "sku_hd_lamp_quantity", "String");
  check(args, "sku_hd_length", "String");
  check(args, "spec_id", "String");
}
