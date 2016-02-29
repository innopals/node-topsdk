'use strict'
module.exports = function(args, check) {
  check(args, "group_id", "Number", true);
  check(args, "new_group_name", "String", true);
}
