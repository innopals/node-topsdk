'use strict'
module.exports = function(args, check) {
  check(args, "is_disable_subaccount", "Boolean");
  check(args, "is_dispatch", "Boolean");
  check(args, "sub_id", "Number", true);
}
