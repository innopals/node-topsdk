'use strict'
module.exports = function(args, check) {
  check(args, "duty_id", "Number", true);
  check(args, "duty_level", "Number");
  check(args, "duty_name", "String");
  check(args, "user_nick", "String", true);
}
