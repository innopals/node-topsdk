'use strict'
module.exports = function(args, check) {
  check(args, "activity_id", "Number", true);
  check(args, "item_id", "Number", true);
  check(args, "promotion_type", "Number", true);
  check(args, "promotion_value", "Number", true);
}
