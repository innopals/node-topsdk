'use strict'
module.exports = function(args, check) {
  check(args, "item_code", "String");
  check(args, "item_id", "String");
  check(args, "owner_user_id", "String");
}
