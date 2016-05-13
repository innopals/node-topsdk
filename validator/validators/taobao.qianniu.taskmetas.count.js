'use strict'
module.exports = function(args, check) {
  check(args, "biz_type", "String");
  check(args, "key_word", "String");
  check(args, "sender_uid", "Number");
  check(args, "status", "Number");
}
