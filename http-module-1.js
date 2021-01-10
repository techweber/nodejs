var http = require('http');
var url = require('url');
// create a server object

http.createServer(function(req,res){
	res.writeHead(200, {'Content-type':'text/html'});
	var q = url.parse(req.url,true).query;
	var txt = q.year + " " + q.month;
	// res.write(req.url); // write a response to the client
	res.end(txt); // end the respone
}).listen(8080); // server object listens of port 8080