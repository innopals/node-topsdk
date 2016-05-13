'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_ids", "Number", true);
  check(args, "nick", "String");
}
