'use strict'
module.exports = function(args, check) {
  check(args, "alipay_no", "String");
  check(args, "attributes", "String");
  check(args, "buyer_nick", "String");
  check(args, "expect_end_time", "Date");
  check(args, "expect_start_time", "Date");
  check(args, "invoince_info", "String");
  check(args, "is_finished", "Boolean", true);
  check(args, "order_code", "String");
  check(args, "order_flag", "String");
  check(args, "order_item_list", "String", true);
  check(args, "order_sub_type", "String", true);
  check(args, "order_type", "String", true);
  check(args, "out_biz_code", "String", true);
  check(args, "package_count", "Number");
  check(args, "payable_amount", "Number");
  check(args, "prev_order_code", "String");
  check(args, "receiver_info", "String");
  check(args, "remark", "String");
  check(args, "schedule_end", "String");
  check(args, "schedule_start", "String");
  check(args, "schedule_type", "String");
  check(args, "sender_info", "String");
  check(args, "service_fee", "Number");
  check(args, "store_code", "String", true);
  check(args, "tms_info", "String");
  check(args, "tms_order_code", "String");
  check(args, "tms_service_code", "String");
  check(args, "total_amount", "Number");
}
