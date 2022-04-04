import { write } from 'fs';
import http, { Server } from 'http'

const host = 'localhost';
const port = 8000;
let buffer;

http.createServer((req, res) =>
{
	if (req.method === 'POST')
	{
		buffer = '';

		req.on('data', chunk =>
		{
			buffer += chunk;
		})
		req.on('close', () =>
		{
			console.log(buffer);
		})
		res.writeHead(201);
		res.end('end of buffer');
	}
	else
	{
		res.writeHead(200);
		res.end('hi');
	}
})

.listen(port, host, () =>
{
	console.log(`Server on ${host}:${port}`);
})