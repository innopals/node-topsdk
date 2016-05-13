'use strict'
module.exports = function(args, check) {
  check(args, "biz_order_id", "Number");
  check(args, "biz_sub_order_id", "Number");
  check(args, "page_index", "Number", true);
  check(args, "page_size", "Number", true);
  check(args, "sc_item_id", "Number", true);
  check(args, "status_query", "Number", true);
}
