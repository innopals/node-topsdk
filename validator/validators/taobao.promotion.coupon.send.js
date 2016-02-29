'use strict'
module.exports = function(args, check) {
  check(args, "buyer_nick", "String", true);
  check(args, "coupon_id", "Number", true);
}
