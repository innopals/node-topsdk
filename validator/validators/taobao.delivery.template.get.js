'use strict'
module.exports = function(args, check) {
  check(args, "fields", "Field List", true);
  check(args, "template_ids", "Field List", true);
  check(args, "user_nick", "String");
}
