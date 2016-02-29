'use strict'
module.exports = function(args, check) {
  check(args, "binds", "String");
  check(args, "cid", "Number", true);
  check(args, "customer_props", "String");
  check(args, "desc", "String");
  check(args, "extra_info", "String");
  check(args, "image", "byte[]", true);
  check(args, "is_pub_suite", "Boolean");
  check(args, "major", "Boolean");
  check(args, "market_id", "String");
  check(args, "market_time", "Date");
  check(args, "name", "String");
  check(args, "outer_id", "String");
  check(args, "packing_list", "String");
  check(args, "price", "String");
  check(args, "property_alias", "String");
  check(args, "props", "String");
  check(args, "sale_props", "String");
  check(args, "sell_pt", "String");
  check(args, "suite_items_str", "String");
  check(args, "template_id", "Number");
  check(args, "vertical_market", "Number");
}
