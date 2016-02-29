'use strict'
module.exports = function(args, check) {
  check(args, "application_key", "String", true);
  check(args, "version", "String");
}
