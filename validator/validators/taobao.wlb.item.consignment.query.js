'use strict'
module.exports = function(args, check) {
  check(args, "authorize_end_time", "Date");
  check(args, "authorize_start_time", "Date");
  check(args, "owner_user_nick", "String");
  check(args, "page_no", "Number", true);
  check(args, "page_size", "Number", true);
}
