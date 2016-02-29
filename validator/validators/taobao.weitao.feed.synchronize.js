'use strict'
module.exports = function(args, check) {
  check(args, "biz_id", "Number", true);
  check(args, "cover_path", "String", true);
  check(args, "detail_url", "String", true);
  check(args, "end_time", "Number", true);
  check(args, "start_time", "Number", true);
  check(args, "summary", "String", true);
  check(args, "title", "String", true);
}
