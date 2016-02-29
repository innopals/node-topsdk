'use strict'
module.exports = function(args, check) {
  check(args, "category_id", "Number");
  check(args, "incremental", "Boolean");
  check(args, "item_id", "Number", true);
  check(args, "xml_data", "String", true);
}
