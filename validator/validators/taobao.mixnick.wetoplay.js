'use strict'
module.exports = function(args, check) {
  check(args, "trace_id", "String");
  check(args, "we_mixnick", "String");
}
