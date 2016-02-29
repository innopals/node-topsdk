'use strict'
module.exports = function(args, check) {
  check(args, "barcode", "String");
  check(args, "certified_pic_str", "String");
  check(args, "certified_txt_str", "String");
  check(args, "change_prop", "String");
  check(args, "customer_spec_props", "String");
  check(args, "image", "byte[]", true);
  check(args, "label_price", "Number");
  check(args, "market_time", "Date");
  check(args, "product_code", "String");
  check(args, "product_id", "Number", true);
  check(args, "spec_props", "String");
  check(args, "spec_props_alias", "String");
}
