'use strict'
module.exports = function(args, check) {
  check(args, "buyer_nick", "String");
  check(args, "end_modified", "Date");
  check(args, "fields", "String", true);
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_modified", "Date");
  check(args, "status", "String");
  check(args, "type", "String");
  check(args, "use_has_next", "Boolean");
}
