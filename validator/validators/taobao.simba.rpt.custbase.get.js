'use strict'
module.exports = function(args, check) {
  check(args, "end_time", "String", true);
  check(args, "nick", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "source", "String", true);
  check(args, "start_time", "String", true);
  check(args, "subway_token", "String", true);
}
