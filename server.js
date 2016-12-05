var http = require("http")
var url = require("url")

function start(route,handle) {                    
        function onRequest(req, res) {

            var postData =""
            var pathname = url.parse(req.url).pathname
            console.log("收到来自 " + pathname +" 的请求")
                route(pathname,handle, res, req)
        }

    http.createServer(onRequest).listen(8888)           
    console.log("服务已启动")
}
exports.start = start
