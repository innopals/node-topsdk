'use strict'
module.exports = function(args, check) {
  check(args, "appkey", "String", true);
  check(args, "device_type", "String");
  check(args, "order_id", "Number");
  check(args, "out_order_id", "String");
}
