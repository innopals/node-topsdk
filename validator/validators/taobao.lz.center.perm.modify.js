'use strict'
module.exports = function(args, check) {
  check(args, "app_engine", "String", true);
  check(args, "order_by", "Number", true);
  check(args, "privilege_code", "String", true);
  check(args, "privilege_name", "String", true);
  check(args, "privilege_type", "Number", true);
  check(args, "privilege_url", "String", true);
  check(args, "seller_id", "Number", true);
}
