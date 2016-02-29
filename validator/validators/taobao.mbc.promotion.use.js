'use strict'
module.exports = function(args, check) {
  check(args, "actual_fee", "Number", true);
  check(args, "discount_fee", "Number", true);
  check(args, "end_time", "Date");
  check(args, "outer_no", "String", true);
  check(args, "promotion_id", "String", true);
  check(args, "promotion_type", "Number", true);
  check(args, "start_time", "Date");
  check(args, "total_fee", "Number", true);
  check(args, "use_time", "Date", true);
  check(args, "user_id", "Number", true);
}
