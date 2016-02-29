'use strict'
module.exports = function(args, check) {
  check(args, "end_date", "Date");
  check(args, "fields", "Field List", true);
  check(args, "num_iid", "Number");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "peer_nick", "String");
  check(args, "rate_type", "String", true);
  check(args, "result", "String");
  check(args, "role", "String", true);
  check(args, "start_date", "Date");
  check(args, "tid", "Number");
  check(args, "use_has_next", "Boolean");
}
