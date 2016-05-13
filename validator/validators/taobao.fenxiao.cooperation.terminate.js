'use strict'
module.exports = function(args, check) {
  check(args, "cooperate_id", "Number", true);
  check(args, "end_remain_days", "Number", true);
  check(args, "end_remark", "String", true);
}
