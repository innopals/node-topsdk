'use strict'
module.exports = function(args, check) {
  check(args, "isforce", "Boolean");
  check(args, "item_barcode", "String");
  check(args, "item_id", "Number", true);
  check(args, "sku_barcodes", "String");
  check(args, "sku_ids", "String");
  check(args, "src", "String");
}
