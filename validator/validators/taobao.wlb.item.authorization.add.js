'use strict'
module.exports = function(args, check) {
  check(args, "auth_type", "Number", true);
  check(args, "authorize_end_time", "Date", true);
  check(args, "authorize_start_time", "Date", true);
  check(args, "consign_user_nick", "String", true);
  check(args, "item_id_list", "String", true);
  check(args, "name", "String", true);
  check(args, "quantity", "Number");
  check(args, "rule_code", "String", true);
}
