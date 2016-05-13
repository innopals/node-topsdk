'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_ids", "Number");
  check(args, "nick", "String");
  check(args, "page_no", "Number", true);
  check(args, "page_size", "Number", true);
}
