'use strict'
module.exports = function(args, check) {
  check(args, "campaign_id", "Number", true);
  check(args, "mobile_discount", "Number", true);
  check(args, "nick", "String");
  check(args, "nonsearch_channels", "Number");
  check(args, "outside_discount", "Number", true);
  check(args, "search_channels", "Number", true);
}
