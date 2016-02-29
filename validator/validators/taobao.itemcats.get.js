'use strict'
module.exports = function(args, check) {
  check(args, "cids", "Number");
  check(args, "datetime", "Date");
  check(args, "fields", "String");
  check(args, "parent_cid", "Number");
}
