'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_id", "Number", true);
  check(args, "nick", "String");
  check(args, "order_by", "String");
  check(args, "page_no", "Number", true);
  check(args, "page_size", "Number", true);
  check(args, "pertinence", "String");
  check(args, "search", "Number");
}
