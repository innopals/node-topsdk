'use strict'
module.exports = function(args, check) {
  check(args, "num_iid", "Number", true);
  check(args, "outer_id", "String");
  check(args, "quantity", "Number", true);
  check(args, "sku_id", "Number");
  check(args, "type", "Number");
}
