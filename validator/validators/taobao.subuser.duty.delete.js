'use strict'
module.exports = function(args, check) {
  check(args, "duty_id", "Number", true);
  check(args, "user_nick", "String", true);
}
