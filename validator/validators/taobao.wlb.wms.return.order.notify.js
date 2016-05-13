'use strict'
module.exports = function(args, check) {
  check(args, "buyer_nick", "String");
  check(args, "extend_fields", "String");
  check(args, "order_code", "String");
  check(args, "order_create_time", "Date");
  check(args, "order_flag", "String");
  check(args, "order_item_list", "Orderitemlistwlbwmsreturnordernotify");
  check(args, "order_source", "String");
  check(args, "order_type", "String");
  check(args, "owner_user_id", "String");
  check(args, "prev_order_code", "String");
  check(args, "receiver_info", "Receiverinfowlbwmsreturnordernotify");
  check(args, "remark", "String");
  check(args, "return_reason", "String");
  check(args, "sender_info", "Senderinfowlbwmsreturnordernotify");
  check(args, "store_code", "String");
  check(args, "tms_order_code", "String");
  check(args, "tms_service_code", "String");
  check(args, "tms_service_name", "String");
}
