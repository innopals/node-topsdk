'use strict'
module.exports = function(args, check) {
  check(args, "addr", "String", true);
  check(args, "cancel_def", "Boolean");
  check(args, "city", "String", true);
  check(args, "contact_id", "Number", true);
  check(args, "contact_name", "String", true);
  check(args, "country", "String");
  check(args, "get_def", "Boolean");
  check(args, "memo", "String");
  check(args, "mobile_phone", "String");
  check(args, "phone", "String");
  check(args, "province", "String", true);
  check(args, "seller_company", "String");
  check(args, "send_def", "Boolean");
  check(args, "zip_code", "String");
}
