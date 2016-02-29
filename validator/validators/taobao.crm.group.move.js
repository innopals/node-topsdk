'use strict'
module.exports = function(args, check) {
  check(args, "from_group_id", "Number", true);
  check(args, "to_group_id", "Number", true);
}
