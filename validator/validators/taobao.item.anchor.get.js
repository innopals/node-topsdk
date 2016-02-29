'use strict'
module.exports = function(args, check) {
  check(args, "cat_id", "Number", true);
  check(args, "type", "Number", true);
}
