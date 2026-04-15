const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === 'user' && req.method === 'GET') {
    res.end('Get user');
  }
});
