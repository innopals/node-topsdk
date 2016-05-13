'use strict'
module.exports = function(args, check) {
  check(args, "category_id_list", "String");
  check(args, "type", "Number", true);
}
