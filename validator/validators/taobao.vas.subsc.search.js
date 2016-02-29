'use strict'
module.exports = function(args, check) {
  check(args, "article_code", "String", true);
  check(args, "autosub", "Boolean");
  check(args, "end_deadline", "Date");
  check(args, "expire_notice", "Boolean");
  check(args, "item_code", "String");
  check(args, "nick", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_deadline", "Date");
  check(args, "status", "Number");
}
