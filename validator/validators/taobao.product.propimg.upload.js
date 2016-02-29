'use strict'
module.exports = function(args, check) {
  check(args, "id", "Number");
  check(args, "image", "byte[]", true);
  check(args, "position", "Number");
  check(args, "product_id", "Number", true);
  check(args, "props", "String", true);
}
