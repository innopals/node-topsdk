'use strict'
module.exports = function(args, check) {
  check(args, "area", "String", true);
  check(args, "campaign_id", "Number", true);
  check(args, "nick", "String");
}
