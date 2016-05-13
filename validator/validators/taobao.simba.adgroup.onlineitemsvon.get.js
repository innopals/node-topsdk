'use strict'
module.exports = function(args, check) {
  check(args, "nick", "String");
  check(args, "order_by", "Boolean");
  check(args, "order_field", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
}
