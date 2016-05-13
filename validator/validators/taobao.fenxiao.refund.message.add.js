'use strict'
module.exports = function(args, check) {
  check(args, "image", "byte[]");
  check(args, "message_content", "String", true);
  check(args, "sub_order_id", "Number", true);
}
