'use strict'
module.exports = function(args, check) {
  check(args, "link_type", "String", true);
  check(args, "short_link_data", "String");
  check(args, "short_link_name", "String", true);
}
