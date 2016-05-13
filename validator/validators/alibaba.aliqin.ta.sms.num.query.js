'use strict'
module.exports = function(args, check) {
  check(args, "biz_id", "String");
  check(args, "current_page", "Number", true);
  check(args, "page_size", "Number", true);
  check(args, "query_date", "String", true);
  check(args, "rec_num", "String", true);
}
