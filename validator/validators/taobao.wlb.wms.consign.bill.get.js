'use strict'
module.exports = function(args, check) {
  check(args, "cn_order_code", "String");
  check(args, "order_code", "String");
}
