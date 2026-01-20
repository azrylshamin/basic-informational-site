import { createServer } from 'node:http';
import { readFile } from 'node:fs';

const hostname = '127.0.0.1';
const port = 8080;

const server = createServer((req, res) => {
  let filePath = '';

  // Route based on URL
  if (req.url === '/' || req.url === '/index.html') {
    filePath = 'index.html';
  } else if (req.url === '/about') {
    filePath = 'about.html';
  } else if (req.url === '/contact-me') {
    filePath = 'contact-me.html';
  } else {
    filePath = '404.html';
  }

  // Read and serve the file
  readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
