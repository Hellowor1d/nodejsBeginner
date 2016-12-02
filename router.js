function route(pathname,handle){
    console.log("About to route a request for "+pathname);
 
   if (typeof handle[pathname] === 'function') {
    //    console.log(handle[pathname])
    handle[pathname]();
  } else {
        console.log('no requestHandler was found for ' + pathname);
        return "404 not found"
    }
}

exports.route = route