'use strict'
module.exports = function(args, check) {
  check(args, "address", "String", true);
  check(args, "buyer_name", "String", true);
  check(args, "city", "String");
  check(args, "district", "String");
  check(args, "id_card_number", "String");
  check(args, "logistics_type", "String", true);
  check(args, "mobile", "String");
  check(args, "order_detail", "String", true);
  check(args, "phone", "String");
  check(args, "post_code", "String");
  check(args, "province", "String", true);
}
