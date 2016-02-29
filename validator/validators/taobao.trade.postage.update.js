'use strict'
module.exports = function(args, check) {
  check(args, "post_fee", "String", true);
  check(args, "tid", "Number", true);
}
