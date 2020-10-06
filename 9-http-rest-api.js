const http = require('http');

// Rest API
http.createServer( (req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.writeHead(200, {"Content-Type": "application/json"});

  switch(req.url){
    case '/':
      res.write(`{ appName: 'Demo Rest API', data: '24523324534'} `);
      break;
    case '/contacts':
      res.write(`[ { firstName: 'John', phone: 53245234, email: a@b.com }, 
      { firstName: 'Steve', phone: 2431234, email: s@t.com }]`);
  }

  res.end();

}).listen(3001, () => {
  console.log('Server is started in port 3001. Check http://localhost:3001');
});