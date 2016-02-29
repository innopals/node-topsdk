'use strict'
module.exports = function(args, check) {
  check(args, "department_name", "String", true);
  check(args, "parent_id", "Number", true);
  check(args, "user_nick", "String", true);
}
