'use strict'
module.exports = function(args, check) {
  check(args, "discount_name", "String", true);
  check(args, "discount_types", "String", true);
  check(args, "discount_values", "String", true);
  check(args, "target_ids", "String", true);
  check(args, "target_types", "String", true);
}
