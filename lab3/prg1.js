import http from "http";

const server = http.createServer();
server.on("request", (req, res) => {
    res.writeHead("Hello from server");
    res.end();
});

server.listen(4444,() =>{
  console.log("Server is running.....");
});