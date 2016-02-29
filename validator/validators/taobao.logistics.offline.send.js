'use strict'
module.exports = function(args, check) {
  check(args, "cancel_id", "Number");
  check(args, "company_code", "String", true);
  check(args, "feature", "String");
  check(args, "is_split", "Number");
  check(args, "out_sid", "String", true);
  check(args, "seller_ip", "String");
  check(args, "sender_id", "Number");
  check(args, "sub_tid", "Number");
  check(args, "tid", "Number", true);
}
