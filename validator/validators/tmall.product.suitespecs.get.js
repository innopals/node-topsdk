'use strict'
module.exports = function(args, check) {
  check(args, "cat_id", "Number");
  check(args, "product_id", "Number");
  check(args, "properties", "String");
}
