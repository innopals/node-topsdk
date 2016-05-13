'use strict'
module.exports = function(args, check) {
  check(args, "alipay_no", "String");
  check(args, "ar_amount", "Number");
  check(args, "car_no", "String");
  check(args, "carriers_name", "String");
  check(args, "deliver_requirements", "Deliverrequirementswlbwmsconsignordernotify");
  check(args, "discount_amount", "Number");
  check(args, "extend_fields", "String");
  check(args, "got_amount", "Number");
  check(args, "invoice_info_list", "Invoicelistwlbwmsconsignordernotify");
  check(args, "order_amount", "Number");
  check(args, "order_code", "String", true);
  check(args, "order_create_time", "Date");
  check(args, "order_examination_time", "Date");
  check(args, "order_flag", "String");
  check(args, "order_item_list", "Orderitemlistwlbwmsconsignordernotify");
  check(args, "order_pay_time", "Date");
  check(args, "order_priority", "Number");
  check(args, "order_shop_create_time", "Date");
  check(args, "order_source", "Number");
  check(args, "order_sub_source", "String");
  check(args, "order_type", "Number", true);
  check(args, "picker_call", "String");
  check(args, "picker_id", "String");
  check(args, "picker_name", "String");
  check(args, "postfee", "Number");
  check(args, "prev_order_code", "String");
  check(args, "receiver_info", "Receiverwlbwmsconsignordernotify");
  check(args, "remark", "String");
  check(args, "sender_info", "Senderwlbwmsconsignordernotify");
  check(args, "service_fee", "Number");
  check(args, "store_code", "String");
  check(args, "tms_service_code", "String");
  check(args, "tms_service_name", "String");
  check(args, "transport_mode", "String");
}
