var fs = require('fs');

// Need this because jslint.js is not a module.
eval(fs.readFileSync('jslint.js').toString());

// TODO:
// - read arguments
// - jslint options can be flags
// - pass browser globals?

var results = jslint('foo');

console.log(JSON.stringify(results));

console.log('WARNINGS');
console.log(results.warnings);

