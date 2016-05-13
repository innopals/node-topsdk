'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_id", "Number");
  check(args, "campaign_id", "Number");
  check(args, "end_time", "String", true);
  check(args, "nick", "String");
  check(args, "page_number", "Number");
  check(args, "page_size", "Number");
  check(args, "start_time", "String", true);
}
