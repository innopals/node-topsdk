'use strict'
module.exports = function(args, check) {
  check(args, "assumer", "Number", true);
  check(args, "consign_area_id", "Number");
  check(args, "name", "String", true);
  check(args, "template_add_fees", "String", true);
  check(args, "template_add_standards", "String", true);
  check(args, "template_dests", "String", true);
  check(args, "template_start_fees", "String", true);
  check(args, "template_start_standards", "String", true);
  check(args, "template_types", "String", true);
  check(args, "valuation", "Number", true);
}
