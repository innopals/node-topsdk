'use strict'
module.exports = function(args, check) {
  check(args, "close_reason", "String", true);
  check(args, "tid", "Number", true);
}
