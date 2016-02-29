'use strict'
module.exports = function(args, check) {
  check(args, "template_content", "String", true);
  check(args, "template_name", "String", true);
}
