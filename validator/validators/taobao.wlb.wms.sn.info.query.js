'use strict'
module.exports = function(args, check) {
  check(args, "order_code", "String", true);
  check(args, "order_code_type", "Number", true);
  check(args, "page_index", "Number", true);
}
