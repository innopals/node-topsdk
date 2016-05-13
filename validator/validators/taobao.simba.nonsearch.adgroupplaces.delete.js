'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_places_json", "String", true);
  check(args, "campaign_id", "Number", true);
  check(args, "nick", "String");
}
