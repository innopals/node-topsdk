'use strict'
module.exports = function(args, check) {
  check(args, "f_message_ids", "Number");
  check(args, "group_name", "String");
  check(args, "s_message_ids", "Number", true);
}
