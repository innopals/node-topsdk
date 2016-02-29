'use strict'
module.exports = function(args, check) {
  check(args, "fields", "String", true);
  check(args, "outer_id", "String", true);
}
