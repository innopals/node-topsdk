'use strict'
module.exports = function(args, check) {
  check(args, "category_id", "Number", true);
  check(args, "isv_init", "Boolean");
  check(args, "product_id", "Number", true);
  check(args, "type", "String");
}
