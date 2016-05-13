'use strict'
module.exports = function(args, check) {
  check(args, "knowledge_ids", "Number", true);
  check(args, "source", "Number", true);
}
