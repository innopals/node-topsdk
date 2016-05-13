'use strict'
module.exports = function(args, check) {
  check(args, "assigned_to", "String", true);
  check(args, "author", "String", true);
  check(args, "bug_img_ids", "Number");
  check(args, "cf_47", "String");
  check(args, "cf_57", "String");
  check(args, "cf_xx", "String");
  check(args, "description", "String", true);
  check(args, "priority", "Number");
  check(args, "serious_level", "Number");
  check(args, "subject", "String", true);
  check(args, "testsuite_id", "Number");
  check(args, "tracker_id", "Number", true);
  check(args, "version_id", "Number", true);
  check(args, "watcher_user_ids", "Number");
}
