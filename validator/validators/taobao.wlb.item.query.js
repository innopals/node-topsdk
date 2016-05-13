'use strict'
module.exports = function(args, check) {
  check(args, "is_sku", "String");
  check(args, "item_code", "String");
  check(args, "item_type", "String");
  check(args, "name", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "parent_id", "Number");
  check(args, "status", "String");
  check(args, "title", "String");
}
