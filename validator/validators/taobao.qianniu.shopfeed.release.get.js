'use strict'
module.exports = function(args, check) {
  check(args, "page_size", "Number");
  check(args, "start_date", "Date");
}
