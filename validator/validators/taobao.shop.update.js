'use strict'
module.exports = function(args, check) {
  check(args, "bulletin", "String");
  check(args, "desc", "String");
  check(args, "title", "String");
}
