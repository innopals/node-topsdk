'use strict'
module.exports = function(args, check) {
  check(args, "oid", "Number", true);
  check(args, "sku_id", "Number");
  check(args, "sku_props", "String");
}
