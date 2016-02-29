'use strict'
module.exports = function(args, check) {
  check(args, "award_ids", "String");
  check(args, "interact_id", "String", true);
  check(args, "ua", "String", true);
}
