'use strict'
module.exports = function(args, check) {
  check(args, "car_no", "String");
  check(args, "carriers_name", "String");
  check(args, "extend_fields", "String");
  check(args, "order_code", "String", true);
  check(args, "order_create_time", "Date", true);
  check(args, "order_item_list", "Orderitemlistwlbwmsstockoutordernotify");
  check(args, "order_type", "Number", true);
  check(args, "outbound_type_desc", "String");
  check(args, "pick_call", "String");
  check(args, "pick_id", "String");
  check(args, "pick_name", "String");
  check(args, "prev_order_code", "String");
  check(args, "receiver_info", "Receiverwlbwmsstockoutordernotify");
  check(args, "remark", "String");
  check(args, "send_time", "Date");
  check(args, "sender_info", "Senderwlbwmsstockoutordernotify");
  check(args, "store_code", "String", true);
  check(args, "transport_mode", "String");
}
