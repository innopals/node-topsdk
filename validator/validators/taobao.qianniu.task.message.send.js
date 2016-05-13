'use strict'
module.exports = function(args, check) {
  check(args, "metadata_id", "Number");
  check(args, "task_id", "Number");
}
