'use strict'
module.exports = function(args, check) {
  check(args, "company_id", "Number", true);
  check(args, "item_json_string", "String", true);
  check(args, "logis_type", "Number", true);
  check(args, "mail_no", "String");
  check(args, "order_source", "Number", true);
  check(args, "order_type", "Number", true);
  check(args, "r_address", "String", true);
  check(args, "r_area_id", "Number", true);
  check(args, "r_city_name", "String", true);
  check(args, "r_dist_name", "String");
  check(args, "r_mobile_phone", "String");
  check(args, "r_name", "String", true);
  check(args, "r_prov_name", "String", true);
  check(args, "r_telephone", "String");
  check(args, "r_zip_code", "String", true);
  check(args, "s_address", "String", true);
  check(args, "s_area_id", "Number", true);
  check(args, "s_city_name", "String", true);
  check(args, "s_dist_name", "String");
  check(args, "s_mobile_phone", "String");
  check(args, "s_name", "String", true);
  check(args, "s_prov_name", "String", true);
  check(args, "s_telephone", "String");
  check(args, "s_zip_code", "String", true);
  check(args, "shipping", "String");
  check(args, "trade_id", "Number", true);
  check(args, "user_id", "Number", true);
}
