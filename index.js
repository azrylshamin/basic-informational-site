// import { createServer } from 'node:http';
// import { readFile } from 'node:fs';
import path from 'path';

import express from 'express'
const app = express();

// Serve static files from the current directory
app.use(express.static(path.resolve()));

// Define routes for each page
app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.resolve('contact-me.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.resolve('404.html'));
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app - listening on port ${PORT}!`);
});

// const hostname = '127.0.0.1';
// const port = 8080;

// const server = createServer((req, res) => {
//   let filePath = '';

//   // Route based on URL
//   if (req.url === '/' || req.url === '/index.html') {
//     filePath = 'index.html';
//   } else if (req.url === '/about') {
//     filePath = 'about.html';
//   } else if (req.url === '/contact-me') {
//     filePath = 'contact-me.html';
//   } else {
//     filePath = '404.html';
//   }

//   // Read and serve the file
//   readFile(filePath, (err, data) => {
//     if (err) {
//       res.statusCode = 500;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end('Internal Server Error');
//       return;
//     }

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end(data);
//   });
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
