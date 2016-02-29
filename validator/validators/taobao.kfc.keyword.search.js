'use strict'
module.exports = function(args, check) {
  check(args, "apply", "String");
  check(args, "content", "String", true);
  check(args, "nick", "String");
}
