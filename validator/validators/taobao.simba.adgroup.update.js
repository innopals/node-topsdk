'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_id", "Number", true);
  check(args, "default_price", "Number");
  check(args, "nick", "String");
  check(args, "nonsearch_max_price", "Number");
  check(args, "online_status", "String");
  check(args, "use_nonsearch_default_price", "Boolean");
}
