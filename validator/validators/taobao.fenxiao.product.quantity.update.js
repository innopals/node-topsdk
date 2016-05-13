'use strict'
module.exports = function(args, check) {
  check(args, "product_id", "Number", true);
  check(args, "properties", "String");
  check(args, "quantity", "String", true);
  check(args, "type", "Number");
}
