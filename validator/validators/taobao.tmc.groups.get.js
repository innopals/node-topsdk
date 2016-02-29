'use strict'
module.exports = function(args, check) {
  check(args, "group_names", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
}
