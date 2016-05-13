'use strict'
module.exports = function(args, check) {
  check(args, "cat_leaf_id", "Number");
  check(args, "cat_root_id", "Number", true);
}
