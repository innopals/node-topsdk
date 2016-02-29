'use strict'
module.exports = function(args, check) {
  check(args, "end_modified", "Date");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_modified", "Date");
  check(args, "target_appkey", "String");
  check(args, "user_id", "Number");
}
