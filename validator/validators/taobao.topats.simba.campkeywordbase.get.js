'use strict'
module.exports = function(args, check) {
  check(args, "campaign_id", "Number", true);
  check(args, "nick", "String");
  check(args, "search_type", "String", true);
  check(args, "source", "String", true);
  check(args, "time_slot", "String", true);
}
