'use strict'
module.exports = function(args, check) {
  check(args, "ad_group_id", "Number", true);
  check(args, "bid_price", "Number", true);
  check(args, "bidword_id", "Number", true);
  check(args, "nick", "String");
}
