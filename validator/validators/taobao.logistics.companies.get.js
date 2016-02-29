'use strict'
module.exports = function(args, check) {
  check(args, "fields", "Field List", true);
  check(args, "is_recommended", "Boolean");
  check(args, "order_mode", "String");
}
