'use strict'
module.exports = function(args, check) {
  check(args, "need_guest", "Boolean");
  check(args, "need_message", "Boolean");
  check(args, "oid", "Number");
  check(args, "tid", "Number");
}
