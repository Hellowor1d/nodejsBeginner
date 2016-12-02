function route(pathname,handle,res,postData){
    console.log("About to route a request for "+pathname);
 
   if (typeof handle[pathname] === 'function') {
    //    console.log(handle[pathname])
    handle[pathname](res,postData);
  } else {
        console.log('no requestHandler was found for ' + pathname);
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.write("Not found");
        res.end();
    }
}

exports.route = route
