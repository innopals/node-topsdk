'use strict'
module.exports = function(args, check) {
  check(args, "position", "Number", true);
  check(args, "product_id", "Number", true);
  check(args, "properties", "String");
}
