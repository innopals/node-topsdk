'use strict'
module.exports = function(args, check) {
  check(args, "change_count", "Number", true);
  check(args, "item_id", "Number", true);
  check(args, "op_type", "String", true);
  check(args, "order_source_code", "String");
  check(args, "out_biz_code", "String", true);
  check(args, "result_count", "Number", true);
  check(args, "source", "String", true);
  check(args, "store_code", "String");
  check(args, "type", "String", true);
}
