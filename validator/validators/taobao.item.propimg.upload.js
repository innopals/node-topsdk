'use strict'
module.exports = function(args, check) {
  check(args, "id", "Number");
  check(args, "image", "byte[]");
  check(args, "num_iid", "Number", true);
  check(args, "position", "Number");
  check(args, "properties", "String", true);
}
