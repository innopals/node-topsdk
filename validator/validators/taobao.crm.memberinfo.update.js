'use strict'
module.exports = function(args, check) {
  check(args, "buyer_nick", "String", true);
  check(args, "city", "String");
  check(args, "close_trade_amount", "Number");
  check(args, "close_trade_count", "Number");
  check(args, "grade", "Number");
  check(args, "group_ids", "String");
  check(args, "item_num", "Number");
  check(args, "province", "String");
  check(args, "status", "String", true);
  check(args, "trade_amount", "Number");
  check(args, "trade_count", "Number");
}
