'use strict'
module.exports = function(args, check) {
  check(args, "is_split", "Number");
  check(args, "out_sid", "String", true);
  check(args, "seller_ip", "String");
  check(args, "sub_tid", "Number");
  check(args, "tid", "Number", true);
}
