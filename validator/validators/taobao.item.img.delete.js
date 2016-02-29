'use strict'
module.exports = function(args, check) {
  check(args, "id", "Number", true);
  check(args, "is_sixth_pic", "Boolean");
  check(args, "num_iid", "Number", true);
}
