'use strict'
module.exports = function(args, check) {
  check(args, "color", "String");
  check(args, "delete_property_key_list", "String");
  check(args, "goods_cat", "String");
  check(args, "height", "Number");
  check(args, "id", "Number", true);
  check(args, "is_dangerous", "Boolean");
  check(args, "is_friable", "Boolean");
  check(args, "length", "Number");
  check(args, "name", "String");
  check(args, "package_material", "String");
  check(args, "pricing_cat", "String");
  check(args, "remark", "String");
  check(args, "title", "String");
  check(args, "update_property_key_list", "String");
  check(args, "update_property_value_list", "String");
  check(args, "volume", "Number");
  check(args, "weight", "Number");
  check(args, "width", "Number");
}
