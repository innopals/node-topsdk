'use strict'
module.exports = function(args, check) {
  check(args, "channel_key", "String");
  check(args, "item_id", "Number", true);
}
