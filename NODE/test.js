let http = require('http');     // Modules
let dt = require('./module');
let url = require('url');

http.createServer(function(req, res)
{
	res.writeHead(200, {'Content-Type': 'text/html'});
	let q = url.parse(req.url, true).query;
	let txt = q.year + " " + q.month;
	// res.write("The date and time are currently " + dt.myDateTime())
	res.end(txt);
})
.listen(8080);