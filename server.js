let http = require("http")
let url = require("url")

function start(route) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname
        console.log("收到来自 " + pathname +" 的请求")

        route(pathname)
        
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.write("Hello, amazing node");
        res.end();
    }

    http.createServer(onRequest).listen(8888)
console.log("服务已启动")
}
exports.start = start
