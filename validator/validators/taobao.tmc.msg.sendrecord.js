'use strict'
module.exports = function(args, check) {
  check(args, "data_id", "String", true);
  check(args, "group_name", "String", true);
  check(args, "topic_name", "String", true);
}
