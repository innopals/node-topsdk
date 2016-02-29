'use strict'
module.exports = function(args, check) {
  check(args, "engine", "String", true);
  check(args, "seller_id", "Number", true);
  check(args, "user_id", "Number", true);
}
