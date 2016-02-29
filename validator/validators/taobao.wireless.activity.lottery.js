'use strict'
module.exports = function(args, check) {
  check(args, "biz_param", "String");
  check(args, "biz_type", "String", true);
  check(args, "ua", "String");
  check(args, "umid", "String");
}
