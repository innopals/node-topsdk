'use strict'
module.exports = function(args, check) {
  check(args, "ic_item_id", "Number");
  check(args, "owner_item_id", "Number");
  check(args, "owner_user_nick", "String");
}
