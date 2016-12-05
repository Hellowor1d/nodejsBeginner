var http = require("http")
var url = require("url")

function start(route,handle) {                    
        function onRequest(req, res) {

            var postData =""
            var pathname = url.parse(req.url).pathname
            console.log("收到来自 " + pathname +" 的请求")

            req.setEncoding("utf8");

                req.addListener("data", function(postDataChunk) {
                postData += postDataChunk;
                console.log("Received POST data chunk '"+
                postDataChunk + "'.");
            });

            req.addListener("end", function(){
                route(pathname,handle, res, postData)
            })

        }

    http.createServer(onRequest).listen(8888)           
console.log("服务已启动")
}
exports.start = start
//貌似linuxmint版本没有上传成功