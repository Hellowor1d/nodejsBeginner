 //请求处理函数
 //引用child_process模块，是为了借用一个简单实用的非阻塞（异步）操作:exec();
var exec = require("child_process").exec

 function start(res) {
     console.log("start 发来的访问请求已收到，在处理")
   exec("ls -lah", function(err, stdout, stderr){
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.write(stdout);
        res.end();
   })
 }

 function upload(res){
     console.log("upload 发来的上传请求已收到，在处理")
       res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.write("Hello Upload");
        res.end();
 }

 exports.start = start
 exports.upload = upload