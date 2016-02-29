'use strict'
module.exports = function(args, check) {
  check(args, "activity_id", "Number", true);
  check(args, "ids", "String", true);
}
