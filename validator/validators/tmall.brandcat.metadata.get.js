'use strict'
module.exports = function(args, check) {
  check(args, "brand_id", "Number");
  check(args, "cat_id", "Number", true);
}
