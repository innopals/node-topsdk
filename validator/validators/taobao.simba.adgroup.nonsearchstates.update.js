'use strict'
module.exports = function(args, check) {
  check(args, "adgroupid_nonsearchstate_json", "String", true);
  check(args, "campaign_id", "Number", true);
  check(args, "nick", "String");
}
