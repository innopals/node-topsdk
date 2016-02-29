'use strict'
module.exports = function(args, check) {
  check(args, "content", "String", true);
  check(args, "image", "byte[]", true);
  check(args, "refund_id", "Number", true);
}
