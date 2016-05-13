'use strict'
module.exports = function(args, check) {
  check(args, "id", "Number");
  check(args, "is_major", "Boolean");
  check(args, "num_iid", "Number", true);
  check(args, "pic_path", "String", true);
  check(args, "position", "Number");
}
