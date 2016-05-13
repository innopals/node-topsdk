'use strict'
module.exports = function(args, check) {
  check(args, "abstract_msg", "String");
  check(args, "app_info", "String", true);
  check(args, "author", "String", true);
  check(args, "author_area", "String");
  check(args, "bar_code", "String", true);
  check(args, "book_bind", "String", true);
  check(args, "book_size", "Number");
  check(args, "book_version", "Number");
  check(args, "catalog", "String");
  check(args, "category_id", "Number", true);
  check(args, "china_classify_no", "String");
  check(args, "cip", "String");
  check(args, "commentator", "String");
  check(args, "custom_id", "String", true);
  check(args, "deputy_name", "String", true);
  check(args, "drawor", "String");
  check(args, "editor", "String");
  check(args, "graphor", "String");
  check(args, "image", "byte[]");
  check(args, "isbn", "String", true);
  check(args, "item_ids", "String");
  check(args, "narrator", "String");
  check(args, "part_name", "String");
  check(args, "part_no", "Number");
  check(args, "plottor", "String");
  check(args, "price", "String", true);
  check(args, "publish_company", "String");
  check(args, "publish_ym", "String");
  check(args, "regin_year", "String");
  check(args, "scholisat", "String");
  check(args, "series_books_name", "String");
  check(args, "summary", "String");
  check(args, "translator", "String");
}
