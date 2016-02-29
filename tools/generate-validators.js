'use strict'
const fs = require('fs');
// after running meta-parse
let def = JSON.parse(fs.readFileSync('metadata.json', 'utf8'));
Object.keys(def).forEach(method => {
  let spec = def[method];
  let code =
`'use strict'
module.exports = function(args, check) {
${spec.map(field =>
  `  check(args, ${JSON.stringify(field.name)}, ${JSON.stringify(field.type)}${field.required ? ', true' : ''});`
).join('\n')}
}
`;
  fs.writeFileSync('validator/validators/' + method + '.js', code, 'utf8');
});