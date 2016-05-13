'use strict'
module.exports = function(args, check) {
  check(args, "image", "byte[]");
  check(args, "pic_path", "String");
  check(args, "position", "Number", true);
  check(args, "product_id", "Number", true);
  check(args, "properties", "String");
}
