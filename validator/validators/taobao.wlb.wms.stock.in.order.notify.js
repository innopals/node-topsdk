'use strict'
module.exports = function(args, check) {
  check(args, "expect_end_time", "String");
  check(args, "expect_start_time", "String");
  check(args, "extend_fields", "String");
  check(args, "inbound_type_desc", "String");
  check(args, "order_code", "String", true);
  check(args, "order_create_time", "Date", true);
  check(args, "order_flag", "String");
  check(args, "order_item_list", "Orderitemlistwlbwmsstockinordernotifywl", true);
  check(args, "order_type", "Number", true);
  check(args, "prev_order_code", "String");
  check(args, "receiver_info", "Receiverinfowlbwmsstockinordernotifywl");
  check(args, "remark", "String");
  check(args, "return_reason", "String");
  check(args, "sender_info", "Senderinfowlbwmsstockinordernotifywl");
  check(args, "store_code", "String", true);
  check(args, "supplier_code", "String");
  check(args, "supplier_name", "String");
  check(args, "tms_order_code", "String");
  check(args, "tms_service_code", "String");
  check(args, "tms_service_name", "String");
}
