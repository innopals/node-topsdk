'use strict'
module.exports = function(args, check) {
  check(args, "from", "String", true);
  check(args, "ref", "String", true);
  check(args, "solution_content", "String", true);
}
