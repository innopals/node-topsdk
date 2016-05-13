'use strict'
module.exports = function(args, check) {
  check(args, "budget", "Number");
  check(args, "campaign_id", "Number", true);
  check(args, "nick", "String");
  check(args, "use_smooth", "Boolean", true);
}
