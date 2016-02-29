'use strict'
module.exports = function(args, check) {
  check(args, "fields", "String", true);
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "refund_id", "Number", true);
  check(args, "refund_phase", "String");
}
