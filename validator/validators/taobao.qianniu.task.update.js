'use strict'
module.exports = function(args, check) {
  check(args, "biz_param", "String");
  check(args, "is_deleted", "Number");
  check(args, "memo", "String");
  check(args, "memo_mode", "Number");
  check(args, "priority", "Number");
  check(args, "remind_flag", "Number");
  check(args, "remind_time", "Number");
  check(args, "status", "String");
  check(args, "sub_status", "String");
  check(args, "tag", "String");
  check(args, "task_id", "Number", true);
}
