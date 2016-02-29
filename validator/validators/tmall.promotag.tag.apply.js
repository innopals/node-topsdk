'use strict'
module.exports = function(args, check) {
  check(args, "end_time", "Date", true);
  check(args, "start_time", "Date", true);
  check(args, "tag_desc", "String", true);
  check(args, "tag_name", "String", true);
}
