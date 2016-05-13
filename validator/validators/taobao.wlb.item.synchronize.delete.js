'use strict'
module.exports = function(args, check) {
  check(args, "ext_entity_id", "Number", true);
  check(args, "ext_entity_type", "String", true);
  check(args, "item_id", "Number", true);
}
