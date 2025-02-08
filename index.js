//
// index.js
// main entry for tutorials and examples of Mercury language
// by Timo Hoogland (@tmhglnd), www.timohoogland.com
// 

const fs = require('fs');

console.log('loaded Mercury Examples and Tutorials');

// read the json files and export to examples and tutorials
// converted to inline json in the distribution through brfs
exports.Examples = JSON.parse(fs.readFileSync(__dirname + '/data/examples.json', 'utf-8'));
exports.Tutorials = JSON.parse(fs.readFileSync(__dirname + '/data/tutorials.json', 'utf-8'));
