'use strict'
module.exports = function(args, check) {
  check(args, "buyer_nicks", "String", true);
  check(args, "group_ids", "Number", true);
}
