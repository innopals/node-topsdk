'use strict'
module.exports = function(args, check) {
  check(args, "discount_id", "Number");
  check(args, "ext_fields", "String");
}
