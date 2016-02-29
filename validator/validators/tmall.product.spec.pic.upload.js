'use strict'
module.exports = function(args, check) {
  check(args, "certify_pic", "byte[]", true);
  check(args, "certify_type", "Number", true);
}
