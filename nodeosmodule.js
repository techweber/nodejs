var os = require('os');

// Endianness
console.log('Endianness : ' + os.endianness());

// OS Type
console.log('type : ' + os.type());

// OS Platform
console.log('Platform : ' + os.platform());

// Total System Memory
console.log('Total Memory : ' + os.totalmem() /  1024 + ' mbytes');

// Total Free Memory
console.log('Free Memory : ' + os.freemem() / 1024 + ' bytes');