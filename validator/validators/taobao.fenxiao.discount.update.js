'use strict'
module.exports = function(args, check) {
  check(args, "detail_ids", "String");
  check(args, "detail_statuss", "String");
  check(args, "discount_id", "Number");
  check(args, "discount_name", "String");
  check(args, "discount_status", "String");
  check(args, "discount_types", "String");
  check(args, "discount_values", "String");
  check(args, "target_ids", "String");
  check(args, "target_types", "String");
}
