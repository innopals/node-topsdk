'use strict'
module.exports = function(args, check) {
  check(args, "current_page", "Number", true);
  check(args, "date", "Date", true);
  check(args, "page_size", "Number");
}
