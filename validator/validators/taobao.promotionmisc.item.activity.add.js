'use strict'
module.exports = function(args, check) {
  check(args, "decrease_amount", "Number");
  check(args, "discount_rate", "Number");
  check(args, "end_time", "Date", true);
  check(args, "is_decrease_money", "Boolean");
  check(args, "is_discount", "Boolean");
  check(args, "is_user_tag", "Boolean");
  check(args, "name", "String", true);
  check(args, "participate_range", "Number", true);
  check(args, "start_time", "Date", true);
  check(args, "user_tag", "String");
}
