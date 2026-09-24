import http from "http";

const server =http.createServer((req,res)=>{
   
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h2>Hello Client</h2>");
    console.log("Response sent to client");
});
server.listen(4444,()=>{
    console.log("Server is running.....");
});
// npm init -y ye package.json banayega taki hume bar bar server ko start aur stop na karna pade
// npm-node package manager
// npm i nodemon -D