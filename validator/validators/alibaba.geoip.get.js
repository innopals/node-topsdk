'use strict'
module.exports = function(args, check) {
  check(args, "ip", "String", true);
  check(args, "language", "String", true);
}
