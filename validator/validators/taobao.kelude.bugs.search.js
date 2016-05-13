'use strict'
module.exports = function(args, check) {
  check(args, "assigned_to", "String");
  check(args, "author", "String");
  check(args, "cf_xx", "String");
  check(args, "commit_date_end", "Date");
  check(args, "commit_date_start", "Date");
  check(args, "ids", "Number");
  check(args, "line_id", "Number");
  check(args, "page", "Number");
  check(args, "per_page", "Number");
  check(args, "project_id", "Number");
  check(args, "serious_level", "String");
  check(args, "status", "String");
  check(args, "subject", "String");
  check(args, "tracker_id", "Number");
  check(args, "update_date_end", "Date");
  check(args, "update_date_start", "Date");
  check(args, "version_id", "Number");
}
