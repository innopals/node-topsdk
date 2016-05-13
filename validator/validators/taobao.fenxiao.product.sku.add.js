'use strict'
module.exports = function(args, check) {
  check(args, "agent_cost_price", "String");
  check(args, "dealer_cost_price", "String");
  check(args, "product_id", "Number", true);
  check(args, "properties", "String", true);
  check(args, "quantity", "Number");
  check(args, "sku_number", "String");
  check(args, "standard_price", "String", true);
}
