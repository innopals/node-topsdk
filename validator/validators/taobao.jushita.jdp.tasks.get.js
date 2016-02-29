'use strict'
module.exports = function(args, check) {
  check(args, "fetch_num", "Number");
  check(args, "target_appkey", "String");
  check(args, "task_item_num", "Number");
  check(args, "task_items", "Number");
  check(args, "type", "Number", true);
  check(args, "user_ids", "Number");
}
