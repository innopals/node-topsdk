'use strict'
module.exports = function(args, check) {
  check(args, "id", "Number");
  check(args, "image", "byte[]", true);
  check(args, "is_major", "Boolean");
  check(args, "position", "Number");
  check(args, "product_id", "Number", true);
}
