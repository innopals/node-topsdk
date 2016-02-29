'use strict'
module.exports = function(args, check) {
  check(args, "fields", "Field List", true);
  check(args, "nick", "String");
  check(args, "num_iid", "Number");
  check(args, "sku_id", "Number", true);
}
