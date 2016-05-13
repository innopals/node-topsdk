'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_ids", "Number", true);
  check(args, "campaign_id", "Number", true);
  check(args, "nick", "String");
}
