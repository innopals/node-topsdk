'use strict'
module.exports = function(args, check) {
  check(args, "department_id", "Number", true);
  check(args, "department_name", "String");
  check(args, "parent_id", "Number");
  check(args, "user_nick", "String", true);
}
