'use strict'
module.exports = function(args, check) {
  check(args, "buyer_nick", "String");
  check(args, "end_created", "Date");
  check(args, "fields", "Field List", true);
  check(args, "freight_payer", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "receiver_name", "String");
  check(args, "seller_confirm", "String");
  check(args, "start_created", "Date");
  check(args, "status", "String");
  check(args, "tid", "Number");
  check(args, "type", "String");
}
