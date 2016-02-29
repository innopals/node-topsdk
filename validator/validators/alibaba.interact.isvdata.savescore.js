'use strict'
module.exports = function(args, check) {
  check(args, "interact_id", "String", true);
  check(args, "score", "Number", true);
}
