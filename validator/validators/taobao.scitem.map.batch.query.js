'use strict'
module.exports = function(args, check) {
  check(args, "outer_code", "String");
  check(args, "page_index", "Number");
  check(args, "page_size", "Number");
  check(args, "sc_item_id", "Number");
}
