var path = require('path');

// Normalization
console.log('Normalization: ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path: ' + path.join('/test','test1','2slashes/1slash','tab','..'));

// Resolve
console.log('resolve: ' + path.resolve('nodepathmodule.js'));

// Extension name
console.log('Extension : ' + path.extname('nodepathmodule.js'));