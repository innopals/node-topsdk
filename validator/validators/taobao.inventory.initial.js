'use strict'
module.exports = function(args, check) {
  check(args, "items", "String", true);
  check(args, "store_code", "String", true);
}
