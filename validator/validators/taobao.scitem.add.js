'use strict'
module.exports = function(args, check) {
  check(args, "bar_code", "String");
  check(args, "brand_id", "Number");
  check(args, "brand_name", "String");
  check(args, "height", "Number");
  check(args, "is_area_sale", "Number");
  check(args, "is_costly", "Number");
  check(args, "is_dangerous", "Number");
  check(args, "is_friable", "Number");
  check(args, "is_warranty", "Number");
  check(args, "item_name", "String", true);
  check(args, "item_type", "Number");
  check(args, "length", "Number");
  check(args, "matter_status", "Number");
  check(args, "outer_code", "String", true);
  check(args, "price", "Number");
  check(args, "properties", "String");
  check(args, "remark", "String");
  check(args, "spu_id", "Number");
  check(args, "volume", "Number");
  check(args, "weight", "Number");
  check(args, "width", "Number");
  check(args, "wms_code", "String");
}
