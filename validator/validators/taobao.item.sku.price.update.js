'use strict'
module.exports = function(args, check) {
  check(args, "ignorewarning", "String");
  check(args, "item_price", "Price");
  check(args, "lang", "String");
  check(args, "num_iid", "Number", true);
  check(args, "outer_id", "String");
  check(args, "price", "Price");
  check(args, "properties", "String", true);
  check(args, "quantity", "Number");
}
