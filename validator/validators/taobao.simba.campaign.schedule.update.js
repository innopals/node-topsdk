'use strict'
module.exports = function(args, check) {
  check(args, "campaign_id", "Number", true);
  check(args, "nick", "String");
  check(args, "schedule", "String", true);
}
