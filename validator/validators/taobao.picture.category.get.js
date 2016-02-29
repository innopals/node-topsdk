'use strict'
module.exports = function(args, check) {
  check(args, "modified_time", "Date");
  check(args, "parent_id", "Number");
  check(args, "picture_category_id", "Number");
  check(args, "picture_category_name", "String");
  check(args, "type", "String");
}
