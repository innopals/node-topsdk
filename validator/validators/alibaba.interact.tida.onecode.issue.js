'use strict'
module.exports = function(args, check) {
  check(args, "api", "String", true);
  check(args, "biz_ext_string", "String");
  check(args, "mix_user_nick", "String", true);
  check(args, "safety", "String");
  check(args, "ticket", "String", true);
  check(args, "trace_id", "String", true);
}
