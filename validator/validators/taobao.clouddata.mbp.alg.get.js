'use strict'
module.exports = function(args, check) {
  check(args, "group_id", "String", true);
  check(args, "model_id", "Number", true);
  check(args, "parameter", "String");
}
