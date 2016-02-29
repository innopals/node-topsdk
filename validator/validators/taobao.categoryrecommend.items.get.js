'use strict'
module.exports = function(args, check) {
  check(args, "category_id", "Number", true);
  check(args, "count", "Number", true);
  check(args, "ext", "String");
  check(args, "recommend_type", "Number", true);
}
