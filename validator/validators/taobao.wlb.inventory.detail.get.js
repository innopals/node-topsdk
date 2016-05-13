'use strict'
module.exports = function(args, check) {
  check(args, "inventory_type_list", "String");
  check(args, "item_id", "Number", true);
  check(args, "store_code", "String");
}
