'use strict'
module.exports = function(args, check) {
  check(args, "client_info", "String");
  check(args, "fields", "String", true);
  check(args, "need_detail", "Boolean");
  check(args, "topic", "String");
  check(args, "type", "Number");
  check(args, "user_ids", "String");
}
