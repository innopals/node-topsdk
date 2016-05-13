'use strict'
module.exports = function(args, check) {
  check(args, "metadata_id", "Number", true);
  check(args, "tasks", "String", true);
}
