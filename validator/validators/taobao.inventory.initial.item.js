'use strict'
module.exports = function(args, check) {
  check(args, "sc_item_id", "Number", true);
  check(args, "store_inventorys", "String", true);
}
