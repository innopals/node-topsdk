'use strict'
module.exports = function(args, check) {
  check(args, "end_date", "Date");
  check(args, "msg_code", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_date", "Date");
  check(args, "status", "String");
}
