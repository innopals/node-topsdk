'use strict'
module.exports = function(args, check) {
  check(args, "knowledgeids", "Number", true);
  check(args, "source", "Number", true);
}
