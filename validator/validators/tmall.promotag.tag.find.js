'use strict'
module.exports = function(args, check) {
  check(args, "page_no", "Number", true);
  check(args, "page_size", "Number", true);
  check(args, "tag_id", "Number");
  check(args, "tag_name", "String");
}
