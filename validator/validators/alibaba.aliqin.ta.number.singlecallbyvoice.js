'use strict'
module.exports = function(args, check) {
  check(args, "called_num", "String", true);
  check(args, "called_show_num", "String", true);
  check(args, "params", "Json");
  check(args, "partner_code", "String", true);
  check(args, "voice_code", "String", true);
}
