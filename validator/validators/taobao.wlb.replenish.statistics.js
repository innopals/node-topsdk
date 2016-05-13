'use strict'
module.exports = function(args, check) {
  check(args, "item_code", "String");
  check(args, "name", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "store_code", "String");
}
