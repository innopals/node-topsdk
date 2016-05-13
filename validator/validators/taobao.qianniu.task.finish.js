'use strict'
module.exports = function(args, check) {
  check(args, "memo", "String");
  check(args, "task_id", "Number", true);
}
