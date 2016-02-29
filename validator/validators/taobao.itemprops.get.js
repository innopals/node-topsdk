'use strict'
module.exports = function(args, check) {
  check(args, "attr_keys", "String");
  check(args, "child_path", "String");
  check(args, "cid", "Number", true);
  check(args, "datetime", "Date");
  check(args, "fields", "String");
  check(args, "is_color_prop", "Boolean");
  check(args, "is_enum_prop", "Boolean");
  check(args, "is_input_prop", "Boolean");
  check(args, "is_item_prop", "Boolean");
  check(args, "is_key_prop", "Boolean");
  check(args, "is_sale_prop", "Boolean");
  check(args, "parent_pid", "Number");
  check(args, "pid", "Number");
  check(args, "type", "Number");
}
