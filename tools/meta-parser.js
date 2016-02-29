'use strict'
const fs = require('fs');
// ApiMetadata.xml is from taobao top meta sdk.
let xml = fs.readFileSync('ApiMetadata.xml', 'utf8');
// npm install xml2js before running this tool.
var parseString = require('xml2js').parseString;
var apis = {};
parseString(xml, function (err, result) {
  result = JSON.parse(JSON.stringify(result));
  result.metadata.apis[0].api.forEach(api => {
    if (!api.request) return;
    let name = api.name[0], params = api.request[0].param.map(param => {
      let def = {
        name: param.name[0],
        type: param.type[0]
      };
      if (param.required[0] === 'required') def.required = true;
      return def;
    });
    apis[name] = params;
  })
  fs.writeFileSync('metadata.json', JSON.stringify(apis), 'utf8');
});