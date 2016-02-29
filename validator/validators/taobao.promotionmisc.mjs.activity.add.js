'use strict'
module.exports = function(args, check) {
  check(args, "decrease_amount", "Number");
  check(args, "discount_rate", "Number");
  check(args, "end_time", "Date", true);
  check(args, "exclude_area", "String");
  check(args, "gift_id", "Number");
  check(args, "gift_name", "String");
  check(args, "gift_url", "String");
  check(args, "is_amount_multiple", "Boolean");
  check(args, "is_amount_over", "Boolean");
  check(args, "is_decrease_money", "Boolean");
  check(args, "is_discount", "Boolean");
  check(args, "is_free_post", "Boolean");
  check(args, "is_item_count_over", "Boolean");
  check(args, "is_item_multiple", "Boolean");
  check(args, "is_send_gift", "Boolean");
  check(args, "is_shop_member", "Boolean");
  check(args, "is_user_tag", "Boolean");
  check(args, "item_count", "Number");
  check(args, "name", "String", true);
  check(args, "participate_range", "Number", true);
  check(args, "shop_member_level", "Number");
  check(args, "start_time", "Date", true);
  check(args, "total_price", "Number");
  check(args, "type", "Number", true);
  check(args, "user_tag", "String");
}
