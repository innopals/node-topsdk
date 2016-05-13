'use strict'
module.exports = function(args, check) {
  check(args, "assigned_to", "String");
  check(args, "author", "String", true);
  check(args, "cf_47", "String");
  check(args, "cf_57", "String");
  check(args, "cf_xx", "String");
  check(args, "description", "String", true);
  check(args, "id", "Number", true);
  check(args, "notes", "String");
  check(args, "priority", "Number");
  check(args, "serious_level", "Number");
  check(args, "status_id", "Number");
  check(args, "subject", "String", true);
  check(args, "testsuite_id", "Number");
  check(args, "version_id", "Number");
  check(args, "watcher_user_ids", "Number");
}
