'use strict'
module.exports = function(args, check) {
  check(args, "barcode_str", "String");
  check(args, "cid", "Number");
  check(args, "customer_props", "String");
  check(args, "fields", "Field List", true);
  check(args, "market_id", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "props", "String");
  check(args, "q", "String");
  check(args, "status", "String");
  check(args, "suite_items_str", "String");
  check(args, "vertical_market", "Number");
}
