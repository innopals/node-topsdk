'use strict'
module.exports = function(args, check) {
  check(args, "item_id", "Number");
  check(args, "name", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "rule_code", "String");
  check(args, "status", "String");
  check(args, "type", "String");
}
