'use strict'
module.exports = function(args, check) {
  check(args, "from_id", "Number", true);
  check(args, "to_address", "ReciverAddressDo", true);
}
