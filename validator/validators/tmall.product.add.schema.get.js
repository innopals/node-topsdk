'use strict'
module.exports = function(args, check) {
  check(args, "brand_id", "Number");
  check(args, "category_id", "Number", true);
}
