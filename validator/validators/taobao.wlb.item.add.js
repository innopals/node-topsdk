'use strict'
module.exports = function(args, check) {
  check(args, "color", "String");
  check(args, "goods_cat", "String");
  check(args, "height", "Number");
  check(args, "is_dangerous", "Boolean");
  check(args, "is_friable", "Boolean");
  check(args, "is_sku", "String", true);
  check(args, "item_code", "String", true);
  check(args, "length", "Number");
  check(args, "name", "String", true);
  check(args, "package_material", "String");
  check(args, "price", "Number");
  check(args, "pricing_cat", "String");
  check(args, "pro_name_list", "String");
  check(args, "pro_value_list", "String");
  check(args, "remark", "String");
  check(args, "support_batch", "Boolean");
  check(args, "title", "String");
  check(args, "type", "String");
  check(args, "volume", "Number");
  check(args, "weight", "Number");
  check(args, "width", "Number");
}
