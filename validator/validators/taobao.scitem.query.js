'use strict'
module.exports = function(args, check) {
  check(args, "bar_code", "String");
  check(args, "item_name", "String");
  check(args, "item_type", "Number");
  check(args, "outer_code", "String");
  check(args, "page_index", "Number");
  check(args, "page_size", "Number");
  check(args, "wms_code", "String");
}
