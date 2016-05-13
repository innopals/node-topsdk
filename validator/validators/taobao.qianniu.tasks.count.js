'use strict'
module.exports = function(args, check) {
  check(args, "biz_ids", "String");
  check(args, "biz_nick", "String");
  check(args, "biz_type", "String");
  check(args, "end_date", "String");
  check(args, "exclude_biz_type", "String");
  check(args, "key_word", "String");
  check(args, "metadata_ids", "String");
  check(args, "priority", "Number");
  check(args, "receiver_uid", "Number");
  check(args, "remind_flag", "Number");
  check(args, "sender_uid", "Number");
  check(args, "start_date", "String");
  check(args, "status", "String");
  check(args, "sub_biz_type", "String");
  check(args, "sub_status", "String");
  check(args, "task_ids", "String");
}
