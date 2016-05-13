'use strict'
module.exports = function(args, check) {
  check(args, "apply_end", "Date");
  check(args, "apply_start", "Date");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "status", "Number");
}
