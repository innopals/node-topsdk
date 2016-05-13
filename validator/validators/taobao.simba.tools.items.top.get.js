'use strict'
module.exports = function(args, check) {
  check(args, "ip", "String", true);
  check(args, "keyword", "String", true);
  check(args, "nick", "String");
}
