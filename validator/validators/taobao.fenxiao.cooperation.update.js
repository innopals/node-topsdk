'use strict'
module.exports = function(args, check) {
  check(args, "distributor_id", "Number", true);
  check(args, "grade_id", "Number", true);
  check(args, "trade_type", "String");
}
