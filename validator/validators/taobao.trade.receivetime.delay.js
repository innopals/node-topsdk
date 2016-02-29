'use strict'
module.exports = function(args, check) {
  check(args, "days", "Number", true);
  check(args, "tid", "Number", true);
}
