'use strict'
module.exports = function(args, check) {
  check(args, "cid", "Number");
  check(args, "end_price", "Number");
  check(args, "end_score", "Number");
  check(args, "end_volume", "Number");
  check(args, "fields", "String", true);
  check(args, "genuine_security", "Boolean");
  check(args, "is_3D", "Boolean");
  check(args, "is_cod", "Boolean");
  check(args, "is_mall", "Boolean");
  check(args, "is_prepay", "Boolean");
  check(args, "is_xinpin", "Boolean");
  check(args, "location.city", "String");
  check(args, "location.state", "String");
  check(args, "nicks", "String");
  check(args, "one_station", "Boolean");
  check(args, "order_by", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "post_free", "Boolean");
  check(args, "product_id", "Number");
  check(args, "promoted_service", "String");
  check(args, "props", "String");
  check(args, "q", "String");
  check(args, "start_price", "Number");
  check(args, "start_score", "Number");
  check(args, "start_volume", "Number");
  check(args, "stuff_status", "String");
  check(args, "ww_status", "Boolean");
}
