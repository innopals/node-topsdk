'use strict'
module.exports = function(args, check) {
  check(args, "oid", "Number", true);
  check(args, "reply", "String", true);
}
