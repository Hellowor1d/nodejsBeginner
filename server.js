let http = require("http")
function  onRequest (req,res) {
    console.log("收到请求")
        res.writeHead (200, {"Content-Type": "text/plain"})
        res.write("Hello, amazing node");
        res.end();
}
http.createServer ( onRequest).listen(8888)
console.log("服务已启动")