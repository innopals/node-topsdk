'use strict'
module.exports = function(args, check) {
  check(args, "cat_id", "String", true);
  check(args, "dimension", "String", true);
  check(args, "end_date", "String", true);
  check(args, "page_size", "Number", true);
  check(args, "start_date", "String", true);
}
