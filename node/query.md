## node.js路由

我们要为路由提供请求的 URL 和其他需要的 GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码。

因此，我们需要查看 HTTP 请求，从中提取出请求的 URL 以及 GET/POST 参数。这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。

我们需要的所有数据都会包含在 request 对象中，该对象作为 onRequest() 回调函数的第一个参数传递。但是为了解析这些数据，我们需要额外的 Node.JS 模块，它们分别是 url 和 querystring 模块。

```js
                   url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring.parse(queryString)["foo"]    |
                                            |
                         querystring.parse(queryString)["hello"]
```



http.js

```js
var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname);
		response.writeHead(200, { "Content-Type": "text/plain" });
		route(pathname, response)
		// response.write("Hello World");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
```

router.js

```js
function route(pathname, response) {
    // console.log("About to route a request for " + pathname);
    if(pathname == '/'){
        response.write('home');
    }else if(pathname == '/info'){
        response.write('info');
    }else{
        response.write('that');
    }

  }
   
exports.route = route;
```

app.js

```js
var sever = require('./http');
var router = require('./router')
sever.start(router.route);
```

