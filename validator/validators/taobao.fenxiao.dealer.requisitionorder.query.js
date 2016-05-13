'use strict'
module.exports = function(args, check) {
  check(args, "dealer_order_ids", "Number", true);
  check(args, "fields", "String");
}
