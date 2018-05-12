var http = require('http');
var url = require('url');
var fs = require('fs');

var port = 8090;

http.createServer(function(request, response) {
	// 解析文件名
	var pathname = url.parse(request.url).pathname;

	console.log(pathname);

	fs.readFile(pathname.slice(1), function(err, data) {
		if (err) {
			response.writeHead(404, {
				'Content-Type': 'text/html'
			});
		} else {
			// 判断文件类型
			if (/\.(jpe?g|png|gif|svg)$/g.test(pathname)) {
				// img
				var type = pathname.match(/\.(jpe?g|png|gif|svg)$/g)[0].slice(1);
				response.writeHead(200, {
					'Content-Type': 'image/' + type
				});
			} else if (/\.css$/g.test(pathname)) {
				// css
				response.writeHead(200, {
					'Content-Type': 'text/css'
				});
			} else if (/\.js$/g.test(pathname)) {
				// js
				response.writeHead(200, {
					'Content-Type': 'text/javascript'
				});
			} else {
				// html
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});
			}
			response.write(data);
		}
		response.end();
	});

}).listen(port);
console.log('server is listening ' + port + ' port');
