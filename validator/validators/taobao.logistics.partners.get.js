'use strict'
module.exports = function(args, check) {
  check(args, "goods_value", "String");
  check(args, "is_need_carriage", "Boolean");
  check(args, "service_type", "String");
  check(args, "source_id", "String");
  check(args, "target_id", "String");
}
