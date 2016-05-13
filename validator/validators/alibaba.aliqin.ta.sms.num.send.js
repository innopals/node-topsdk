'use strict'
module.exports = function(args, check) {
  check(args, "extend", "String");
  check(args, "extend_code", "String");
  check(args, "extend_name", "String");
  check(args, "rec_num", "String", true);
  check(args, "sms_free_sign_name", "String", true);
  check(args, "sms_param", "Json");
  check(args, "sms_template_code", "String", true);
  check(args, "sms_type", "String", true);
}
