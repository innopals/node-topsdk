'use strict'
module.exports = function(args, check) {
  check(args, "item_id", "Number", true);
  check(args, "item_type", "String", true);
  check(args, "quantity", "Number", true);
}
