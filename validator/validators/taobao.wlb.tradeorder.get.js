'use strict'
module.exports = function(args, check) {
  check(args, "sub_trade_id", "String");
  check(args, "trade_id", "String", true);
  check(args, "trade_type", "String", true);
}
