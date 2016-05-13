'use strict'
module.exports = function(args, check) {
  check(args, "current_page", "Number");
  check(args, "meta_id", "Number");
  check(args, "order_by", "String");
  check(args, "order_type", "String");
  check(args, "page_size", "Number");
  check(args, "task_id", "Number");
  check(args, "user_id", "Number");
}
