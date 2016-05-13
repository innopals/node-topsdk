'use strict'
module.exports = function(args, check) {
  check(args, "active_date", "Date");
  check(args, "alert_time", "Date");
  check(args, "alert_url", "String");
  check(args, "edit_status", "Number", true);
  check(args, "feed_content", "String", true);
  check(args, "feed_tag", "Number", true);
  check(args, "feed_title", "String");
  check(args, "shop_feed_ext_info", "String");
}
