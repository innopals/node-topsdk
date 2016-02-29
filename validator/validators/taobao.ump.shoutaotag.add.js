'use strict'
module.exports = function(args, check) {
  check(args, "buyer_id", "Number", true);
  check(args, "channel_key", "String", true);
  check(args, "item_id", "Number", true);
}
