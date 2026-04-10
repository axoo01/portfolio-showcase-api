import * as http from 'node:http';

const PORT = 3000;


let projects = [
  { id: 1, name: "Task Manager", tech: "Node.js", url: "https://my-task-app.com" }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ 
      message: "Welcome to the Portfolio Showcase API",
      endpoints: {
        health: "/health",
        projects: "/projects"
      }
    }));
  } 

 
  else if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "Portfolio API is live" }));
  } 
  

});
server.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}/`);
});