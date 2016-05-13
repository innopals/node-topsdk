'use strict'
module.exports = function(args, check) {
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "status", "String");
}
