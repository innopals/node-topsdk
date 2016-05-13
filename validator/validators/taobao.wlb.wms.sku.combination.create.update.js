'use strict'
module.exports = function(args, check) {
  check(args, "dest_item", "Destitemlistwlbwmsskucombinationcreateupdate", true);
  check(args, "item_id", "String", true);
  check(args, "owner_user_id", "String", true);
  check(args, "proportion", "Number", true);
}
