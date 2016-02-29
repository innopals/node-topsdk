'use strict'
module.exports = function(args, check) {
  check(args, "binds", "String");
  check(args, "desc", "String");
  check(args, "extra_info", "String");
  check(args, "image", "byte[]");
  check(args, "major", "Boolean");
  check(args, "market_id", "String");
  check(args, "name", "String");
  check(args, "native_unkeyprops", "String");
  check(args, "outer_id", "String");
  check(args, "packing_list", "String");
  check(args, "price", "String");
  check(args, "product_id", "Number", true);
  check(args, "sale_props", "String");
  check(args, "sell_pt", "String");
}
