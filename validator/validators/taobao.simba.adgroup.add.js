'use strict'
module.exports = function(args, check) {
  check(args, "campaign_id", "Number", true);
  check(args, "default_price", "Number", true);
  check(args, "img_url", "String", true);
  check(args, "item_id", "Number", true);
  check(args, "nick", "String");
  check(args, "title", "String", true);
}
