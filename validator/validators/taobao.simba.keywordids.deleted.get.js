'use strict'
module.exports = function(args, check) {
  check(args, "nick", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_time", "Date", true);
}
