'use strict'
module.exports = function(args, check) {
  check(args, "order_code", "String", true);
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
}
