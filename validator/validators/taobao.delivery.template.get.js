'use strict'
module.exports = function(args, check) {
  check(args, "fields", "String", true);
  check(args, "template_ids", "String", true);
  check(args, "user_nick", "String");
}
