//  //请求处理函数

var querystring = require("querystring");
 function start(res, postData) {

     console.log("start 发来的访问请求已收到，在处理")

     var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>'
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
}
function upload(res, postData) {
  console.log("Request handler 'upload' was called.");
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("刚刚提交了的内容为: "+
  querystring.parse(postData).text);
  res.end();
}



 exports.start = start
 exports.upload = upload
