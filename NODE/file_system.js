// let http = require('http');
let fs = require('fs');

// http.createServer(function(req, res)
// {
	//read file
// 	fs.readFile('testfile.html', function(err, data)
// 	{
// 		res.writeHead(200 , {'Content-Type': 'text/html'})
// 		res.write(data);
// 		return res.end();
// 	})
// })
// .listen(8080);

//append
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//open

// fs.open('mynewfile2.txt', 'w', function(err, file)
// {
// 	if (err)
// 		throw err;
// 	console.log('saved');
// })

//delete

// fs.unlink('mynewfile2.txt', function(err)
// {
// 	if (err) throw err;
// 	console.log('file deleted');
// })


//rename
fs.rename('mynewfile1.txt', 'shhhh.txt', function(err)
{
	if (err) throw err;
	console.log('file renamed');
})
