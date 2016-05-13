'use strict'
module.exports = function(args, check) {
  check(args, "bidword_list", "String", true);
  check(args, "cat_id", "String", true);
  check(args, "end_date", "String", true);
  check(args, "start_date", "String", true);
}
