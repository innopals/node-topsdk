'use strict'
module.exports = function(args, check) {
  check(args, "gmt_end", "Date");
  check(args, "gmt_start", "Date");
  check(args, "item_id", "Number");
  check(args, "op_type", "String");
  check(args, "op_user_id", "Number");
  check(args, "order_code", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "store_code", "String");
}
