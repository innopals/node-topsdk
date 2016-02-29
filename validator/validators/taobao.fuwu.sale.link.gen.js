'use strict'
module.exports = function(args, check) {
  check(args, "nick", "String");
  check(args, "param_str", "String", true);
}
