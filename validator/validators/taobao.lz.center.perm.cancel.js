'use strict'
module.exports = function(args, check) {
  check(args, "app_engine", "String", true);
  check(args, "privilege_code", "String", true);
  check(args, "seller_id", "Number", true);
}
