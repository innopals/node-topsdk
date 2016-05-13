'use strict'
module.exports = function(args, check) {
  check(args, "dest_item_list", "Field List", true);
  check(args, "item_id", "Number", true);
  check(args, "proportion_list", "Field List");
}
