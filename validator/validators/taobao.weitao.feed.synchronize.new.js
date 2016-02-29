'use strict'
module.exports = function(args, check) {
  check(args, "detail_url", "String", true);
  check(args, "end_time", "Number", true);
  check(args, "feed_type", "Number", true);
  check(args, "item_ids", "String");
  check(args, "sbiz_id", "String", true);
  check(args, "start_time", "Number", true);
  check(args, "summary", "String", true);
  check(args, "title", "String", true);
}
