'use strict'
module.exports = function(args, check) {
  check(args, "knowledge_id", "Number", true);
  check(args, "question_desc", "String");
  check(args, "solution", "String");
}
