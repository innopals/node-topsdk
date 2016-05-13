'use strict'
module.exports = function(args, check) {
  check(args, "agent_cost_percent", "Number", true);
  check(args, "dealer_cost_percent", "Number", true);
  check(args, "name", "String", true);
  check(args, "retail_high_percent", "Number", true);
  check(args, "retail_low_percent", "Number", true);
}
