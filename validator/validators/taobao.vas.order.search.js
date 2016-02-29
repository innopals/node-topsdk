'use strict'
module.exports = function(args, check) {
  check(args, "article_code", "String", true);
  check(args, "biz_order_id", "Number");
  check(args, "biz_type", "Number");
  check(args, "end_created", "Date");
  check(args, "item_code", "String");
  check(args, "nick", "String");
  check(args, "order_id", "Number");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_created", "Date");
}
