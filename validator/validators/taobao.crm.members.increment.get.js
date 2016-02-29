'use strict'
module.exports = function(args, check) {
  check(args, "current_page", "Number", true);
  check(args, "end_modify", "Date");
  check(args, "grade", "Number");
  check(args, "page_size", "Number");
  check(args, "start_modify", "Date");
}
