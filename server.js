const http = require('http')

http.createServer((req, res) => {

	switch(req.url) {
		case '/':
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.end(html)
			break
		case '/app.css':
			res.writeHead(200, {'Content-Type': 'text/css'})
			res.end(css)
			break
		case '/app.js':
			res.writeHead(200, {'Content-Type': 'text/javascript'})
			res.end(js) 
			break
		case '/app.js':
			res.writeHead(200, {'Content-Type': 'text/javascript'})
			res.end(js) 
			break
		default:
			res.writeHead(404, {'Content-Type': 'text/plain'})
			res.end('404')
			break
	}

}).listen(3000, () => console.log('Сервер работает'))