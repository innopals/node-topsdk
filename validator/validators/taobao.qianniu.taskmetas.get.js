'use strict'
module.exports = function(args, check) {
  check(args, "biz_type", "String");
  check(args, "client_info", "String");
  check(args, "current_page", "Number");
  check(args, "fields", "String", true);
  check(args, "key_word", "String");
  check(args, "meta_ids", "String");
  check(args, "order_by", "String");
  check(args, "order_type", "String");
  check(args, "page_size", "Number");
  check(args, "receiver_uid", "Number");
  check(args, "sender_uid", "Number");
  check(args, "status", "Number");
}
