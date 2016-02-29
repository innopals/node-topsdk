'use strict'
module.exports = function(args, check) {
  check(args, "cmd_name", "String", true);
  check(args, "params", "String", true);
}
