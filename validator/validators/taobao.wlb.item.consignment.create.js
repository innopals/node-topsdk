'use strict'
module.exports = function(args, check) {
  check(args, "number", "Number", true);
  check(args, "owner_item_id", "Number", true);
  check(args, "rule_id", "Number", true);
}
