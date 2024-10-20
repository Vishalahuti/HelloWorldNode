const http = require("http")

const myServer = http.createServer((req,res)=>{
    console.log(req);
    res.end("Hello from Server");
});

myServer.listen(3000,"localhost",()=>console.log("Server Started!"));

