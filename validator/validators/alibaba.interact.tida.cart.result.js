'use strict'
module.exports = function(args, check) {
  check(args, "isv_ext", "String");
  check(args, "item_id", "String");
  check(args, "mix_buyer_nick", "String");
  check(args, "seller_nick", "String");
  check(args, "sku_id", "String");
  check(args, "trace_id", "String");
}
