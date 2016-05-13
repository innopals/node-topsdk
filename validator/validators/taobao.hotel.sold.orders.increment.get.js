'use strict'
module.exports = function(args, check) {
  check(args, "end_modified", "Date", true);
  check(args, "need_guest", "Boolean");
  check(args, "need_message", "Boolean");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_modified", "Date", true);
  check(args, "status", "String");
  check(args, "use_has_next", "Boolean");
}
