'use strict'
module.exports = function(args, check) {
  check(args, "name", "String", true);
  check(args, "parent_cid", "Number");
  check(args, "pict_url", "String");
  check(args, "sort_order", "Number");
}
