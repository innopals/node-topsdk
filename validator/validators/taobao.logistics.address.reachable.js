'use strict'
module.exports = function(args, check) {
  check(args, "address", "String");
  check(args, "area_code", "String");
  check(args, "partner_ids", "String", true);
  check(args, "service_type", "Number", true);
  check(args, "source_area_code", "String");
}
