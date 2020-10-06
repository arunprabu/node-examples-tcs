const http = require('http');

// Server side rendering website
http.createServer( (req, res) => {
  console.log(req.url);
  console.log(req.method);

  var pageName = "HomePage";
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  switch(req.url){
    case '/':
      res.write(`<html>
                    <head><title>Home</title></head>
                    <body>
                      <a href='/'>Home</a>
                      <a href='/about'>About</a>
                      <a href='/contact'>Contact</a>
                      <div>${pageName}</div>
                    </body>
                  </html>`);
      break;
    case '/about':
      res.write(`<html>
                  <head><title>About</title></head>
                  <body>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                    <div>About Page</div>
                  </body>
                </html>`);
      break;
    case '/contact':
      res.write(`<html>
                <head><title>Home</title></head>
                <body>
                  <a href='/'>Home</a>
                  <a href='/about'>About</a>
                  <a href='/contact'>Contact</a>
                  <div>Contact Page</div>
                </body>
              </html>`);
      break;
    
    default:
      res.write(`<html>
                  <head><title>Home</title></head>
                  <body>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                    <div>404 - Page Not Found</div>
                  </body>
                </html>`);
  }

  res.end();

}).listen(3001, () => {
  console.log('Server is started in port 3001. Check http://localhost:3001');
});