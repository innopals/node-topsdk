'use strict'
module.exports = function(args, check) {
  check(args, "address", "String", true);
  check(args, "address_area_name", "String", true);
  check(args, "alias_name", "String");
  check(args, "contact", "String");
  check(args, "operate_type", "String", true);
  check(args, "phone", "String");
  check(args, "postcode", "Number");
  check(args, "store_code", "String", true);
  check(args, "store_name", "String", true);
  check(args, "store_type", "String", true);
}
