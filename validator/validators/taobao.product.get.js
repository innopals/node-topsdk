'use strict'
module.exports = function(args, check) {
  check(args, "cid", "Number");
  check(args, "customer_props", "String");
  check(args, "fields", "Field List", true);
  check(args, "market_id", "String");
  check(args, "product_id", "Number");
  check(args, "props", "String");
}
