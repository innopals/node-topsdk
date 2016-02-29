'use strict'
module.exports = function(args, check) {
  check(args, "end_create", "Date", true);
  check(args, "ext_type", "String");
  check(args, "fields", "String", true);
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "start_create", "Date", true);
  check(args, "status", "String");
  check(args, "tag", "String");
  check(args, "type", "String");
  check(args, "use_has_next", "Boolean");
}
