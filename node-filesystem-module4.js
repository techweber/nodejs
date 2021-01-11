var fs = require('fs');

fs.writeFile('mynewfile3.txt','This is the content',function(err){
	if(err) throw err;
	console.log('Saved!');
});