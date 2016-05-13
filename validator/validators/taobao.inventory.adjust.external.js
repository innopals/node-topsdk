'use strict'
module.exports = function(args, check) {
  check(args, "biz_type", "String", true);
  check(args, "biz_unique_code", "String", true);
  check(args, "items", "String", true);
  check(args, "occupy_operate_code", "String");
  check(args, "operate_time", "Date", true);
  check(args, "operate_type", "String", true);
  check(args, "reduce_type", "String");
  check(args, "store_code", "String", true);
}
