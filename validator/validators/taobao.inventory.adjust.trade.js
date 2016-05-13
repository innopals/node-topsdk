'use strict'
module.exports = function(args, check) {
  check(args, "biz_unique_code", "String", true);
  check(args, "items", "String", true);
  check(args, "operate_time", "Date", true);
  check(args, "tb_order_type", "String", true);
}
