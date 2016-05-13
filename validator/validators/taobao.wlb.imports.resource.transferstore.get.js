'use strict'
module.exports = function(args, check) {
  check(args, "cids", "Number", true);
  check(args, "from_id", "Number");
  check(args, "resource_id", "Number", true);
  check(args, "to_address", "ReciverAddressDo", true);
}
