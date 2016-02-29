'use strict'
module.exports = function(args, check) {
  check(args, "engine", "String", true);
  check(args, "order_by", "Number");
  check(args, "owner_user_id", "Number");
  check(args, "parent_privilege_code", "String", true);
  check(args, "privilege_code", "String", true);
  check(args, "privilege_level", "Number", true);
  check(args, "privilege_name", "String", true);
  check(args, "privilege_type", "Number", true);
  check(args, "privilege_url", "String");
  check(args, "seller_id", "Number", true);
  check(args, "solution_app_key", "Number", true);
}
