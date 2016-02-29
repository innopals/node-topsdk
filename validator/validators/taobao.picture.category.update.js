'use strict'
module.exports = function(args, check) {
  check(args, "category_id", "Number", true);
  check(args, "category_name", "String");
  check(args, "parent_id", "Number");
}
