'use strict'
module.exports = function(args, check) {
  check(args, "product_id", "Number", true);
  check(args, "xml_data", "String", true);
}
