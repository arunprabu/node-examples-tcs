const http = require('http');

http.createServer( (req, res) => {
  console.log(req.url);
  console.log(req.method);
  
  switch(req.url){
    case '/':
      res.write("Home Page");
      break;
    case '/about':
      res.write("About Page");
      break;
    case '/contact':
      res.write("Contact Page");
      break;
  }
  res.end();
}).listen(3001, () => {
  console.log('Server is started in port 3001. Check http://localhost:3001');
});


