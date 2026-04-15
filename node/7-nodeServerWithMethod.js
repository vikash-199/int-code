const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/user' && req.method === 'GET') {
    res.end('Get user');
  }
  if (req.url === '/user' && req.method === 'POST') {
    res.end('Create User');
  }
});

server.listen(3000);
