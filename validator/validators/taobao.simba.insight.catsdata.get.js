'use strict'
module.exports = function(args, check) {
  check(args, "category_id_list", "String", true);
  check(args, "end_date", "String", true);
  check(args, "start_date", "String", true);
}
