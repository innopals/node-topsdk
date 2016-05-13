'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_id", "Number", true);
  check(args, "catmatch_id", "Number", true);
  check(args, "max_price", "Number", true);
  check(args, "nick", "String");
  check(args, "online_status", "String", true);
  check(args, "use_default_price", "Boolean", true);
}
