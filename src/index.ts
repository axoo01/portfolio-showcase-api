import * as http from 'node:http';
import * as https from 'node:https';

const PORT = 3000;

let projects = [
  { id: 1, name: "Task Manager", url: "https://google.com" }, // Using google for testing
  { id: 2, name: "Broken Link", url: "https://this-site-does-not-exist-123.com" }
];

// Helper function to "Ping" a URL (The US4 Logic)
const checkUrl = (url: string): Promise<string> => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode === 200 ? "Online" : `Offline (${res.statusCode})`);
    }).on('error', () => {
      resolve("Offline (Unreachable)");
    });
  });
};

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // MONITORING: Simple Request Logger
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Portfolio Manager API v2" }));
  } 

  // US1 & MONITORING: Detailed Health Endpoint
  else if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ 
      status: "UP", 
      uptime: process.uptime(),
      memory: process.memoryUsage().heapUsed 
    }));
  } 
  
  // US4: Projects with Live Status
  else if (req.url === '/projects' && req.method === 'GET') {
    try {
      const projectsWithStatus = await Promise.all(
        projects.map(async (p) => ({
          ...p,
          status: await checkUrl(p.url)
        }))
      );
      res.writeHead(200);
      res.end(JSON.stringify(projectsWithStatus));
    } catch (error) {
      console.error("Monitoring Alert: Failed to fetch projects", error);
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Internal Server Error" }));
    }
  } 
  
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Sprint 2: Server running at http://localhost:${PORT}/`);
});