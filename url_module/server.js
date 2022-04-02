let http = require('http');
let url = require('url');
let fs  = require('fs');


http.createServer(function(req, res)
{
	let parsed_url = url.parse(req.url, true);
	let filename = /*"." + parsed_url.pathname*/'/Users/iariss/Desktop/Tuto/url_module/summer.html';
	fs.readFile(filename, function(err, data){
		if (err)
		{
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.write(filename);
			return (res.end('404 Not found'));
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return (res.end());
	})
})

.listen(8080);


// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   })
// })
// .listen(8080);