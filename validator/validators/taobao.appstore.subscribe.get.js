'use strict'
module.exports = function(args, check) {
  check(args, "lease_id", "Number");
  check(args, "nick", "String", true);
}
