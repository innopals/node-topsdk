'use strict'
module.exports = function(args, check) {
  check(args, "activity_biz_id", "String", true);
  check(args, "banner_url", "String", true);
  check(args, "benefit_amount", "String");
  check(args, "benefit_attribute", "String", true);
  check(args, "benefit_denomination", "String");
  check(args, "benefit_type", "String", true);
  check(args, "biz_type", "String", true);
}
