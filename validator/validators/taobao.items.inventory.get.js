'use strict'
module.exports = function(args, check) {
  check(args, "banner", "String");
  check(args, "cid", "Number");
  check(args, "end_modified", "Date");
  check(args, "fields", "Field List", true);
  check(args, "has_discount", "Boolean");
  check(args, "is_cspu", "Boolean");
  check(args, "is_ex", "Boolean");
  check(args, "is_taobao", "Boolean");
  check(args, "order_by", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "q", "String");
  check(args, "seller_cids", "String");
  check(args, "start_modified", "Date");
}
