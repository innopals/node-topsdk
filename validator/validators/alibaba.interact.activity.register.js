'use strict'
module.exports = function(args, check) {
  check(args, "biz_id", "String", true);
  check(args, "description", "String");
  check(args, "end_time", "Date");
  check(args, "entry_url", "String", true);
  check(args, "has_valid_time", "Boolean", true);
  check(args, "name", "String", true);
  check(args, "picture", "String");
  check(args, "start_time", "Date");
}
