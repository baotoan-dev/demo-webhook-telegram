const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js server test!");
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
