'use strict'
module.exports = function(args, check) {
  check(args, "duty_level", "Number", true);
  check(args, "duty_name", "String", true);
  check(args, "user_nick", "String", true);
}
