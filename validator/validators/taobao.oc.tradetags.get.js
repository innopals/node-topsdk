'use strict'
module.exports = function(args, check) {
  check(args, "history", "Number");
  check(args, "tag_names", "String");
  check(args, "tag_types", "String");
  check(args, "tid", "Number", true);
}
