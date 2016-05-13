'use strict'
module.exports = function(args, check) {
  check(args, "sc_item_codes", "String");
  check(args, "sc_item_ids", "String", true);
  check(args, "seller_nick", "String");
  check(args, "store_codes", "String");
}
