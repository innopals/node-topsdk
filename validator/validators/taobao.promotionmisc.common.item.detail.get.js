'use strict'
module.exports = function(args, check) {
  check(args, "activity_id", "Number", true);
  check(args, "detail_id", "Number", true);
}
