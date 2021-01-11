var fs = require('fs');

fs.writeFile('mynewfile3.txt','This is my new txt',function(err){
	if(err) throw err;
	console.log('Replaced!');
})