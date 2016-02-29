'use strict'
module.exports = function(args, check) {
  check(args, "feature", "String");
  check(args, "seller_ip", "String");
  check(args, "tid", "Number", true);
}
