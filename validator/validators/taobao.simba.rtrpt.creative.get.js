'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_id", "Number", true);
  check(args, "campaign_id", "Number", true);
  check(args, "nick", "String");
  check(args, "the_date", "String", true);
}
