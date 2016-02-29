'use strict'
module.exports = function(args, check) {
  check(args, "fields", "String");
  check(args, "title", "String", true);
}
