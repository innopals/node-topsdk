'use strict'
module.exports = function(args, check) {
  check(args, "address", "String", true);
  check(args, "city", "Number", true);
  check(args, "country", "String", true);
  check(args, "decorate_time", "String");
  check(args, "desc", "String", true);
  check(args, "district", "Number");
  check(args, "domestic", "Boolean", true);
  check(args, "level", "String", true);
  check(args, "name", "String", true);
  check(args, "opening_time", "String");
  check(args, "orientation", "String", true);
  check(args, "outer_id", "String");
  check(args, "pic", "byte[]", true);
  check(args, "province", "Number", true);
  check(args, "rooms", "Number");
  check(args, "service", "String");
  check(args, "site_param", "String");
  check(args, "storeys", "Number");
  check(args, "tel", "String");
}
