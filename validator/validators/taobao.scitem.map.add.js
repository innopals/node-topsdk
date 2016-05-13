'use strict'
module.exports = function(args, check) {
  check(args, "item_id", "Number", true);
  check(args, "need_check", "Boolean");
  check(args, "outer_code", "String");
  check(args, "sc_item_id", "Number");
  check(args, "sku_id", "Number");
}
