'use strict'
module.exports = function(args, check) {
  check(args, "client_info", "String");
  check(args, "end_modified", "Date");
  check(args, "number", "Number");
  check(args, "start_modified", "Date");
  check(args, "topic", "String", true);
  check(args, "version", "Number");
}
