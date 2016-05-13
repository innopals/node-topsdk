'use strict'
module.exports = function(args, check) {
  check(args, "nick", "String");
  check(args, "title", "String", true);
}
