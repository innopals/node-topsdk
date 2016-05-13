'use strict'
module.exports = function(args, check) {
  check(args, "area", "String");
  check(args, "bbn", "String");
  check(args, "bed_type", "String", true);
  check(args, "breakfast", "String", true);
  check(args, "channel", "String");
  check(args, "deposit", "Number");
  check(args, "desc", "String", true);
  check(args, "end_time", "String");
  check(args, "fee", "Number");
  check(args, "gmt_deadline", "Date");
  check(args, "gmt_effective", "Date");
  check(args, "guide", "String");
  check(args, "has_receipt", "Boolean");
  check(args, "hid", "Number", true);
  check(args, "max_adv_hours", "Number");
  check(args, "max_days", "Number");
  check(args, "member_level", "String");
  check(args, "min_adv_hours", "Number");
  check(args, "min_days", "Number");
  check(args, "multi_room_quotas", "String");
  check(args, "payment_type", "String", true);
  check(args, "pic", "byte[]");
  check(args, "pic_path", "String");
  check(args, "price_type", "String");
  check(args, "receipt_info", "String");
  check(args, "receipt_other_type_desc", "String");
  check(args, "receipt_type", "String");
  check(args, "refund_policy_info", "String");
  check(args, "rid", "Number", true);
  check(args, "room_quotas", "String");
  check(args, "service", "String");
  check(args, "site_param", "String");
  check(args, "size", "String");
  check(args, "start_time", "String");
  check(args, "storey", "String");
  check(args, "title", "String", true);
}
