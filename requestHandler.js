 //请求处理函数

 function start(params) {
     console.log("start 发来的访问请求已收到，在处理")
 }

 function upload(){
     console.log("upload 发来的上传请求已收到，在处理")
 }

 exports.start = start
 exports.upload = upload