'use strict'
module.exports = function(args, check) {
  check(args, "hid", "Number", true);
  check(args, "pic", "byte[]", true);
}
