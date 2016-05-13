'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_id", "Number", true);
  check(args, "catmatch_price", "Number", true);
  check(args, "nick", "String");
}
