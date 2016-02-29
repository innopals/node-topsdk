'use strict'
module.exports = function(args, check) {
  check(args, "cid", "Number", true);
  check(args, "name", "String");
  check(args, "pict_url", "String");
  check(args, "sort_order", "Number");
}
