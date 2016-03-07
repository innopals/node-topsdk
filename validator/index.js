'use strict'
function checkField(args, name, type, required) {
  if (typeof args[name] === 'undefined') {
    if (required) throw new Error("Parameter " + name + ' is required.');
    return;
  }
  switch(type) {
    case 'String':
      if (typeof args[name] !== 'string') throw new Error("Parameter " + name + ' should be a string.');
      break;
    case 'Number':
      if (typeof args[name] !== 'number' && args[name] != parseFloat(args[name])) throw new Error("Parameter " + name + ' should be a number.');
      break;
    case 'Boolean':
      if (typeof args[name] !== 'boolean' && args[name] !== 'true' && args[name] !== 'false') throw new Error("Parameter " + name + ' should be a boolean.');
      break;
  }
}

module.exports = function(method, args) {
  var validate;
  try {
    validate = require('./validators/' + method);
  } catch(e) { 
    // does not have a validator
    return;
  }
  validate(args, checkField);
}