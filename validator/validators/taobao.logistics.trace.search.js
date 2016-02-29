'use strict'
module.exports = function(args, check) {
  check(args, "is_split", "Number");
  check(args, "seller_nick", "String", true);
  check(args, "sub_tid", "Number");
  check(args, "tid", "Number", true);
}
