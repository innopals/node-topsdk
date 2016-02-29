'use strict'
module.exports = function(args, check) {
  check(args, "parent_id", "Number");
  check(args, "picture_category_name", "String", true);
}
