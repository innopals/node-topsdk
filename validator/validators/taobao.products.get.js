'use strict'
module.exports = function(args, check) {
  check(args, "fields", "String", true);
  check(args, "nick", "String", true);
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
}
