'use strict'
module.exports = function(args, check) {
  check(args, "end_time", "String", true);
  check(args, "start_time", "String", true);
}
