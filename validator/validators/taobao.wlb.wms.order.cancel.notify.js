'use strict'
module.exports = function(args, check) {
  check(args, "order_code", "String", true);
  check(args, "order_type", "String", true);
  check(args, "store_code", "String", true);
}
