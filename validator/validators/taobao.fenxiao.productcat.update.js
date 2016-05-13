'use strict'
module.exports = function(args, check) {
  check(args, "agent_cost_percent", "Number");
  check(args, "dealer_cost_percent", "Number");
  check(args, "name", "String");
  check(args, "product_line_id", "Number", true);
  check(args, "retail_high_percent", "Number");
  check(args, "retail_low_percent", "Number");
}
