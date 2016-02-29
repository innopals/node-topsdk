'use strict'
module.exports = function(args, check) {
  check(args, "receiver_address", "String");
  check(args, "receiver_city", "String");
  check(args, "receiver_district", "String");
  check(args, "receiver_mobile", "String");
  check(args, "receiver_name", "String");
  check(args, "receiver_phone", "String");
  check(args, "receiver_state", "String");
  check(args, "receiver_zip", "String");
  check(args, "tid", "Number", true);
}
