'use strict'
module.exports = function(args, check) {
  check(args, "store_code", "String");
  check(args, "trade_id", "String", true);
}
