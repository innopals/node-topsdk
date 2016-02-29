'use strict'
module.exports = function(args, check) {
  check(args, "client_type", "String");
  check(args, "image_input_title", "String", true);
  check(args, "img", "byte[]", true);
  check(args, "is_https", "Boolean");
  check(args, "picture_category_id", "Number", true);
  check(args, "picture_id", "Number");
  check(args, "title", "String");
}
