'use strict'
module.exports = function(args, check) {
  check(args, "extend_fields", "String");
  check(args, "material_items", "Materialitemswlbwmsstockpruductprocessingnotify");
  check(args, "order_code", "String", true);
  check(args, "order_create_time", "Date");
  check(args, "order_type", "Number", true);
  check(args, "plan_qty", "Number");
  check(args, "plan_work_time", "Date");
  check(args, "product_items", "Productitemswlbwmsstockpruductprocessingnotify");
  check(args, "remark", "String");
  check(args, "service_type", "Number", true);
  check(args, "store_code", "String");
}
