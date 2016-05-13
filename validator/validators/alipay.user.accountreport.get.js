'use strict'
module.exports = function(args, check) {
  check(args, "end_time", "Date", true);
  check(args, "fields", "String", true);
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_time", "Date", true);
  check(args, "type", "String");
}
