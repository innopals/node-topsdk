'use strict'
module.exports = function(args, check) {
  check(args, "btime", "String", true);
  check(args, "etime", "String", true);
  check(args, "uid", "String", true);
}
