'use strict'
module.exports = function(args, check) {
  check(args, "client_type", "String");
  check(args, "deleted", "String");
  check(args, "end_date", "Date");
  check(args, "is_https", "Boolean");
  check(args, "modified_time", "Date");
  check(args, "order_by", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "picture_category_id", "Number");
  check(args, "picture_id", "Number");
  check(args, "start_date", "Date");
  check(args, "title", "String");
  check(args, "urls", "String");
}
